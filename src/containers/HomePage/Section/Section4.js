import React, { Component } from "react";
import doctorImg from "../../../assets/images/bac-si-noi-bat.jpg";
import Slider from "react-slick";
import "./Section.scss";

class SpecialDoctor extends Component {
  render() {
    return (
      <>
        <div className="section4">
          <div className="section4-title">
            <div className="medical-specialty">
              <span>Bác sĩ nổi bật tuần qua</span>
              <button className="btn-detail">
                <span>Tìm kiếm</span>
              </button>
            </div>
          </div>
          <div className="wap-section4-content">
            <Slider {...this.props.settings}>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
                    </div>
                    <div className="doctor-specialty">Tai Mũi Họng</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      PGS, TS, Giảng viên cao cấp Trần Hữu Bình
                    </div>
                    <div className="doctor-specialty">Sức khỏe tâm thần</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Tuyết Xương
                    </div>
                    <div className="doctor-specialty">Tai Mũi Họng</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      Tiến sĩ, Bác sĩ Đỗ Phương Vịnh
                    </div>
                    <div className="doctor-specialty">Thần kinh</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
                    </div>
                    <div className="doctor-specialty">Tai Mũi Họng</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      PGS, TS, Giảng viên cao cấp Trần Hữu Bình
                    </div>
                    <div className="doctor-specialty">Sức khỏe tâm thần</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Tuyết Xương
                    </div>
                    <div className="doctor-specialty">Tai Mũi Họng</div>
                  </span>
                </div>
              </div>
              <div className="section4-content">
                <div className="section4-sub-content">
                  <img className="special-item" src={doctorImg} alt="img" />
                  <span className="special-text">
                    <div className="doctor-name">
                      Tiến sĩ, Bác sĩ Đỗ Phương Vịnh
                    </div>
                    <div className="doctor-specialty">Thần kinh</div>
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

export default SpecialDoctor;
