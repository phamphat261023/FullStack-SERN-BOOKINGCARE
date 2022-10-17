import React, { Component } from "react";
import "./HomeHeader.scss";
import { dataOption } from "../Header/dataOption";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import img1 from "../../../assets/images/khamchuyenkhoa.png";
import img2 from "../../../assets/images/khamtuxa.png";
import img3 from "../../../assets/images/khamtongquat.png";
import img4 from "../../../assets/images/dichvuxetnghiem.png";
import img5 from "../../../assets/images/suckhoetinhthan.png";
import img6 from "../../../assets/images/khamnhakhoa.png";
import img7 from "../../../assets/images/phau-thuat.png";
import img8 from "../../../assets/images/khamtainha.png";
import img9 from "../../../assets/images/icon-lich-su.png";

class Banner extends Component {
  render() {
    console.log("check props:", this.props);
    return (
      <>
        <div className="banner">
          <div className="banner-container">
            <div className="banner-title-main">
              <FormattedMessage id="banner.healthbackground" />
            </div>
            <div className="banner-title-sub">
              <b>
                <FormattedMessage id="banner.comprehensivehealthcare" />
              </b>
            </div>
            <div className="banner-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <div className="search-text">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Tìm chuyên khoa khám bệnh"
                />
              </div>
            </div>
            <div className="banner-background-option">
              <div className="banner-option">
                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img1} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.specialistexamination" />{" "}
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img2} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.remoteexamination" />
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img3} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.generalexamination" />{" "}
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img4} />
                  </div>
                  <div className="option-text">
                    <FormattedMessage id="banner.medicaltest" />{" "}
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img5} />
                  </div>
                  <div className="option-text">
                    <FormattedMessage id="banner.mentalhealth" />
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img6} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.dentalexamination" />{" "}
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img7} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.surgerypack" />{" "}
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img8} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.medicalproducts" />{" "}
                  </div>
                </div>

                <div className="wap-option">
                  <div className="wap-option-item">
                    <img className="option-item" src={img9} />
                  </div>
                  <div className="option-text">
                    {" "}
                    <FormattedMessage id="banner.corporatehealth" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
