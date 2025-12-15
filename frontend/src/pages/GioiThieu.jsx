import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function GioiThieu() {
	return (
		<section className="min-h-screen bg-[var(--page-bg)] text-slate-900">
			<div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
				<header className="text-center">
					<p className="text-xs uppercase tracking-[0.5em] text-lime-700">Giới thiệu</p>
					<h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-lime-700">
						GIỚI THIỆU SẢN PHẨM ĐỒ THỦ CÔNG MỸ NGHỆ VIỆT NAM
					</h1>
					<p className="mt-3 text-sm sm:text-base font-semibold text-lime-700 uppercase tracking-[0.2em]">
						Đồ thủ công mỹ nghệ Việt Nam là sự kết tinh tinh hoa văn hóa truyền thống cùng bàn tay khéo léo của những người thợ lành nghề, mang đậm bản sắc dân tộc và giá trị nghệ thuật bền vững theo thời gian.
					</p>
				</header>

				<div className="mt-10 max-w-4xl mx-auto space-y-5 text-slate-700 leading-relaxed">
					<p>
						Các sản phẩm được sản xuất chủ yếu từ nguyên liệu tự nhiên như tre, nứa, mây, luồng ép, đất gốm, giấy thủ công, thân thiện với môi trường và an toàn cho người sử dụng. Mỗi sản phẩm đều trải qua quy trình sản xuất tỉ mỉ, kết hợp giữa kỹ thuật thủ công truyền thống và tiêu chuẩn chất lượng hiện đại, đảm bảo độ bền, tính thẩm mỹ và giá trị sử dụng cao.
					</p>
					<p>
						Chúng tôi sản xuất và cung cấp đa dạng các mặt hàng thủ công mỹ nghệ, bao gồm:
sản phẩm tre mây đan, đồ gốm mỹ nghệ, quạt giấy truyền thống, lồng đèn thủ công, sản phẩm đan tre, cùng nhiều mặt hàng trang trí và gia dụng khác như bình lọ, bát đĩa, khay, chậu trồng cây, đồ dùng văn phòng và đồ trang trí nội thất.
					</p>
					<p>
						Với ưu thế mẫu mã phong phú, chất lượng ổn định, thân thiện với môi trường, các sản phẩm đồ thủ công mỹ nghệ Việt Nam đáp ứng nhu cầu ngày càng cao của thị trường trong nước và xuất khẩu, vượt qua các tiêu chuẩn khắt khe của nhiều quốc gia, từ đó xây dựng được uy tín và mối quan hệ hợp tác lâu dài với đối tác.
					</p>
					<p>
						Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn, giới thiệu sản phẩm và hợp tác cung cấp đồ thủ công mỹ nghệ Việt Nam chất lượng cao.
					</p>

					<div className="my-8 max-w-5xl mx-auto overflow-hidden rounded-3xl">
						<img
							src="src/assets/anhnen006.png"
							alt="Mỹ Nghệ Cát Đằng"
							loading="lazy"
							className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]"
						/>
					</div>

					<p>
						Sau hơn 22 năm thành lập công ty chúng tôi đã nỗ lực phát triển nhiều mặt hàng thủ công mỹ nghệ và hiện tại chúng tôi đã mở rộng thêm nhiều mặt hàng về luồng ép xuất khẩu. Với hơn 100 lao động thường xuyên của cả 2 xưởng và hơn 300 lao động khu vực lân cận dưới sự kiểm soát chất lượng của đội ngũ kiểm tra chất lượng của xưởng sản xuất đã tạo ra những sản phẩm như: Bình lọ, bát đĩa, khay, chậu trồng cây bằng tre nứa cuốn các đồ dung văn phòng như: Giá đựng tài liệu, bàn máy tính, hộp đựng giấy ăn và nhiều vật dụng bằng chất liệu luồng ép tự nhiên đa dạng theo yêu cầu của khách hàng có chất lượng, thân thiện với môi trường đã đáp ứng nhu cầu ngày một cao của thị trường xuất khẩu cũng như vượt qua những rào cản khắt khe của những nước nhập khẩu nên đã tạo được uy tín và duy trì mối quan hệ lâu dài với bạn hàng.
					</p>
				</div>
			</div>

			<Footer />
		</section>
	);
}
