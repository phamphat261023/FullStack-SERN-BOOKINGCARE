import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Section.scss";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
import img5 from "../../../assets/images/img5.png";
import img6 from "../../../assets/images/img6.png";
import img7 from "../../../assets/images/img7.png";
import img8 from "../../../assets/images/img8.png";

class MainSection extends Component {
  render() {
    return (
      <>
        <div className="section1">
          <OwlCarousel
            className="owl-theme"
            items="4"
            autoplay
            nav
            loop
            dots={false}
            margin={0}
          >
            <div className="item">
              <img className="item-img" src={img1} alt="img1" />
              <div className="information">
                <p className="information-title">
                  Tư vấn phẫu thuật bao quy đầu chọn gói
                </p>
                <ul className="information-content">
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Thực hiện bởi bác sĩ Nam học</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img2} alt="img2" />
              <div className="information">
                <p className="information-title">
                  Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám
                </p>
                <span className="information-content">
                  Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng
                  di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện
                  ích dễ dùng
                </span>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img3} alt="img3" />
              <div className="information">
                <p className="information-title">
                  Kit Test COVID bằng nước bọt
                </p>
                <ul className="information-content">
                  <li>Kit Test nhanh bằng nước bọt</li>
                  <li>Đơn giản, tiện lợi, chính xác</li>
                  <li>Bộ Y tế Việt Nam cấp chứng nhận</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img4} alt="img4" />
              <div className="information">
                <p className="information-title">
                  Gói Tầm soát Suy giãn tĩnh mạch
                </p>
                <ul className="information-content">
                  <li>Hỗ trợ điều trị dứt điểm 1 - 2 liệu trình </li>
                  <li>Tư vấn điều trị bằng những Phương pháp ít xâm lấn</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img5} alt="img5" />
              <div className="information">
                <p className="information-title">
                  Khuyến mại tháng 9 tại Phòng khám Mediplus
                </p>
                <ul className="information-content">
                  <li>Giảm giá 10% dịch vụ nội soi tiêu hóa</li>
                  <li>Tặng suất khám miễn phí cho trẻ</li>
                  <li>Miễn phí khám Sản phụ khoa, siêu âm thai</li>
                  <li>Ưu đãi cho khách hàng tái khám</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img6} alt="img6" />
              <div className="information">
                <p className="information-title">
                  Ưu đãi gói khám sức khỏe tại Phòng khám CHAC
                </p>
                <span className="information-content">
                  Trong tháng 9 này, khách hàng có nhu cầu khám sức khỏe tổng
                  quát có thể đăng ký khám tại Phòng khám CHAC để nhận ưu đãi
                  gói khám từ 15%.
                </span>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img7} alt="img7" />
              <div className="information">
                <p className="information-title">Xét nghiệm COVID</p>
                <ul className="information-content">
                  <li>Tầm soát và xác định COVID-19</li>
                  <li>Phương pháp Test nhanh và PCR</li>
                  <li>Theo quy chuẩn Bộ Y tế</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <img className="item-img" src={img8} alt="img8" />
              <div className="information">
                <p className="information-title">
                  Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn
                </p>
                <span className="information-content">
                  Bệnh viện Bảo Sơn có nhiều ưu đãi cho khách hàng nội soi tiêu
                  hóa, khám sức khỏe tổng quát, siêu âm, khám thai,... trong
                  tháng 9 năm 2022.
                </span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default MainSection;
