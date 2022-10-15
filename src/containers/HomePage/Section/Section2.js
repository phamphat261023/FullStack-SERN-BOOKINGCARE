import React, { Component } from "react";
import Slider from "react-slick";
import specialtyImg from "../../../assets/images/khoa-xuong-khop.jpg";

class Specialty extends Component {
  render() {
    return (
      <>
        <div className="section2">
          <div className="section2-title">
            <div className="medical-specialty">
              <span>Chuyên khoa phổ biến</span>
              <button className="btn-detail">
                <span>Xem thêm</span>
              </button>
            </div>
          </div>

          <div className="wap-section2-content">
            <Slider {...this.props.settings}>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Cơ xương khớp</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Thần kinh</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Tiêu bóa</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Tim mạch</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Tai mũi họng</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Cột sống</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Y học cổ truyền</span>
              </div>
              <div className="section2-content">
                <img className="special-item" src={specialtyImg} alt="img" />
                <span className="special-text">Châm cứu</span>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default Specialty;
