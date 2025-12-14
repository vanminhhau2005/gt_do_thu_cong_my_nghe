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
						MỸ NGHỆ CÁT ĐẰNG
					</h1>
					<p className="mt-3 text-sm sm:text-base font-semibold text-lime-700 uppercase tracking-[0.2em]">
						SẢN XUẤT VÀ CUNG CẤP SẢN PHẨM MỸ NGHỆ TỪ CHẮP NỨA, LUỒNG ÉP
					</p>
				</header>

				<div className="mt-10 max-w-4xl mx-auto space-y-5 text-slate-700 leading-relaxed">
					<p>
						Công ty TNHH Sản Xuất Mỹ Nghệ Xuất Khẩu Cát Đằng được thành lập năm 1998 trên cơ sở làng nghề thủ công mỹ nghệ Cát Đằng với mục tiêu phát triển mở rộng thị trường xuất khẩu, góp phần tạo công ăn việc làm cho lao động ở nông thôn, chung tay xóa đói giảm nghèo cho các khu vực lân cận khu vực các xã của huyện Ý Yên, Nam Định.
					</p>
					<p>
						Trước đây, người ta vẫn thấy hàng sơn mài chỉ được làm trên những tấm gỗ đã được chọn lựa rất kỹ, thì nay, Công ty TNHH SX Mỹ Nghệ XK Cát Đằng đã sáng tạo thêm những sản phẩm từ việc chắp nứa rồi đem sơn mài. So với gỗ, loại mặt hàng này vừa nhẹ, giá rẻ hơn, màu sắc và kiểu dáng đa dạng, chất lượng đảm bảo, thu hút được nhiều khách hàng và chủ yếu để xuất khẩu đi nhiều nước trên thế giới.
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
