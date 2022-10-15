import React, { Component } from "react";
import Slider from "react-slick";
import hospitalImg from "../../../assets/images/co-so-y-te.jpg";
import "./Section.scss";

class MedicalFacility extends Component {
  render() {
    return (
      <>
        <div className="section3">
          <div className="section3-title">
            <div className="medical-specialty">
              <span>Cơ sở y tế nổi bật</span>
              <button className="btn-detail">
                <span>Tìm kiếm</span>
              </button>
            </div>
          </div>

          <div className="wap-section3-content">
            <Slider {...this.props.settings}>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">
                  Bệnh viện Hữu nghị Việt Đức
                </span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">Bệnh viện Chợ Rẫy</span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">
                  Phòng khám Bệnh viện Đại học Y Dược 1
                </span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">
                  Bệnh viện K - Cơ sở Phan Chu Trinh
                </span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">
                  Bệnh viện Ung bướu Hưng Việt
                </span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">Hệ thống Y tế Thu Cúc TCI</span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">
                  Phòng khám đa khoa Sài Gòn Healthcare
                </span>
              </div>
              <div className="section3-content">
                <img className="special-item" src={hospitalImg} alt="img" />
                <span className="special-text">
                  Bệnh viện Nam học và Hiếm muộn Hà Nội
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default MedicalFacility;
