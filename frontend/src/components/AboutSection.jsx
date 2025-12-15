
import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
	const image = "src/assets/anhnen006.png";

	return (
		<section id="about" className="w-full bg-lime-100 pt-10 pb-12">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="text-xs uppercase tracking-[0.45em] text-lime-700">Giới thiệu</p>
						<h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-lime-700">
							MỸ NGHỆ CÁT ĐẰNG
						</h2>
						<p className="mt-3 text-sm sm:text-base font-semibold text-lime-700 uppercase tracking-[0.2em]">
							SẢN XUẤT VÀ CUNG CẤP SẢN PHẨM MỸ NGHỆ TỪ CHẮP NỨA, LUỒNG ÉP
						</p>

						<div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
							<p>
								Sau hơn 22 năm thành lập Công ty TNHH Sản Xuất Mỹ Nghệ Xuất Khẩu Cát Đằng đã nỗ lực phát triển nhiều mặt hàng thủ công mỹ nghệ và hiện tại chúng tôi đã mở rộng thêm nhiều mặt hàng về luồng ép xuất khẩu.
							</p>
							<p>
								Với hơn 100 lao động thường xuyên của cả 2 xưởng và hơn 300 lao động khu vực lân cận dưới sự kiểm soát chất lượng của đội ngũ kiểm tra chất lượng của xưởng sản xuất đã tạo ra những sản phẩm như: Bình lọ, bát đĩa, khay, chậu trồng cây bằng tre nứa cuốn các đồ dung văn phòng như: Giá đựng tài liệu, bàn máy tính, hộp đựng giấy ăn và nhiều vật dụng bằng chất liệu luồng ép tự nhiên đa dạng theo yêu cầu của khách hàng
							</p>
							<p>
								Sản phẩm chất lượng, thân thiện với môi trường đã đáp ứng nhu cầu ngày một cao của thị trường xuất khẩu cũng như vượt qua những rào cản khắt khe của những nước nhập khẩu nên đã tạo được uy tín và duy trì mối quan hệ lâu dài với bạn hàng.
							</p>
							<p className="font-semibold text-lime-700">
								Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt hàng
							</p>
						</div>

						<div className="mt-7">
							<Link
								to="/#contact"
								className="inline-flex items-center justify-center rounded-full bg-lime-700 px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-white transition hover:bg-lime-800"
							>
								Liên hệ ngay
							</Link>
						</div>
					</div>

					<div className="w-full">
						<img
							src={image}
							alt="Mỹ nghệ Cát Đằng"
							loading="lazy"
							className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

