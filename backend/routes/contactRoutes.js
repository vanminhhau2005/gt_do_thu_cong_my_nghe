import express from "express";
import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

const router = express.Router();

const clamp = (value, max) => {
	const text = (value ?? "").toString().trim();
	if (!text) return "";
	return text.length > max ? text.slice(0, max) : text;
};

const looksLikeEmailAddress = (value) => {
	const text = (value ?? "").toString().trim();
	if (!text) return false;
	// Accept either plain email or "Name <email@domain>".
	return /[^\s<>]+@[^\s<>]+/.test(text);
};

const getTransporter = () => {
	const host = process.env.SMTP_HOST || "smtp.gmail.com";
	const port = Number(process.env.SMTP_PORT || 465);
	const secureRaw = process.env.SMTP_SECURE;
	const secure = typeof secureRaw === "string" ? secureRaw === "true" : port === 465;

	const user = (process.env.SMTP_USER || "").trim();
	// Gmail App Password is commonly shown/spaced like: "xxxx xxxx xxxx xxxx"
	const pass = (process.env.SMTP_PASS || "").replace(/\s+/g, "").trim();
	if (!user || !pass) {
		const err = new Error("SMTP_USER/SMTP_PASS chưa được cấu hình trong backend/.env");
		err.statusCode = 500;
		throw err;
	}

	return nodemailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass },
	});
};

// POST /api/contact
router.post(
	"/",
	asyncHandler(async (req, res) => {
		const fullName = clamp(req.body?.fullName, 120);
		const phone = clamp(req.body?.phone, 40);
		const email = clamp(req.body?.email, 160);
		const message = clamp(req.body?.message, 2000);
		const requestMenu = Boolean(req.body?.requestMenu);

		const productId = clamp(req.body?.productId, 200);
		const productTitle = clamp(req.body?.productTitle, 200);
		const productLink = clamp(req.body?.productLink, 500);

		if (!fullName) {
			res.status(400);
			throw new Error("Vui lòng nhập họ tên");
		}
		if (!message && !requestMenu) {
			res.status(400);
			throw new Error("Vui lòng nhập nội dung hoặc chọn yêu cầu gửi menu");
		}

		const to = (process.env.CONTACT_TO || process.env.SMTP_USER || "").trim();
		if (!to) {
			res.status(500);
			throw new Error("CONTACT_TO chưa được cấu hình");
		}
		if (!looksLikeEmailAddress(to)) {
			res.status(500);
			throw new Error("CONTACT_TO phải là email nhận thư (vd: your@gmail.com hoặc \"Tên <your@gmail.com>\")");
		}

		const fromEmail = (process.env.CONTACT_FROM || process.env.SMTP_USER || "").trim();
		const subject = `[Liên hệ] ${fullName}${productTitle ? ` - ${productTitle}` : ""}`;

		const lines = [
			`Họ tên: ${fullName}`,
			phone ? `SĐT: ${phone}` : null,
			email ? `Email: ${email}` : null,
			requestMenu ? `Yêu cầu: Gửi menu/bảng sản phẩm` : null,
			productTitle ? `Sản phẩm: ${productTitle}` : null,
			productId ? `Mã sản phẩm: ${productId}` : null,
			productLink ? `Link sản phẩm: ${productLink}` : null,
			"---",
			message ? `Nội dung:\n${message}` : "Nội dung: (không có)",
		].filter(Boolean);

		const html = `
			<div style="font-family:Arial,sans-serif;line-height:1.6">
				<h2 style="margin:0 0 12px">Liên hệ từ website</h2>
				<pre style="white-space:pre-wrap;background:#f6f7f8;padding:12px;border-radius:8px">${lines
					.map((l) => String(l))
					.join("\n")}</pre>
			</div>
		`;

		const transporter = getTransporter();

		try {
			await transporter.sendMail({
				to,
				from: `Website <${fromEmail}>`,
				replyTo: email || undefined,
				subject,
				text: lines.join("\n"),
				html,
			});
		} catch (err) {
			const messageText = String(err?.message || "");
			const isAuthError = err?.code === "EAUTH" || /535\s*-?5\.7\.8|BadCredentials/i.test(messageText);
			if (isAuthError) {
				res.status(500);
				throw new Error(
					"SMTP đăng nhập thất bại (Gmail 535 BadCredentials). Hãy kiểm tra: (1) SMTP_USER đúng là Gmail đã tạo App Password, (2) SMTP_PASS là App Password 16 ký tự (không phải mật khẩu đăng nhập), (3) tài khoản đã bật 2-Step Verification, rồi restart backend."
				);
			}

			res.status(500);
			throw new Error("Gửi email thất bại. Vui lòng kiểm tra cấu hình SMTP và thử lại.");
		}

		res.json({ ok: true, message: "Đã gửi liên hệ thành công" });
	})
);

export default router;
