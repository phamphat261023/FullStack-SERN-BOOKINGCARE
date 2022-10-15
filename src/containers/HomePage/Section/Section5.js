import React, { Component } from "react";
import Slider from "react-slick";
import "./Section.scss";
import handbook from "../../../assets/images/cam-nang.jpg";

class HandBook extends Component {
  render() {
    return (
      <>
        <div className="section5">
          <div className="section5-title">
            <div className="medical-specialty">
              <span>Cẩm nang</span>
              <button className="btn-detail">
                <span>Tất cả bài viết</span>
              </button>
            </div>
          </div>

          <div className="wap-section5-content">
            <Slider {...this.props.settings}>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
              <div className="section5-content">
                <div className="wap-special-item">
                  <img className="special-item" src={handbook} alt="img" />
                </div>
                <div className="wap-special-text">
                  <span className="special-text">
                    Chuyên gia tư vấn những kĩ năng cần thiết cho trẻ em từ 4-10
                    tuổi online uy tín
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default HandBook;
