import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./HomeHeader.scss";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguageApp } from "../../../store/actions";

class HomeHeader extends Component {
  hanldChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    console.log("check language: ", language);
    //fire redux event: actions
  };
  render() {
    let language = this.props.language;
    return (
      <>
        <div className="header">
          <div className="header-containers">
            <div className="left-header">
              <svg
                className="bar"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              <div className="logo"></div>
            </div>
            <div className="center-header">
              <Nav className="justify-content-center">
                <NavItem>
                  <NavLink className="main-nav" active href="#">
                    <FormattedMessage id="home-header.specialty" />
                  </NavLink>
                  <NavLink className="sub-nav" href="#">
                    <FormattedMessage id="home-header.searchdoctors" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="main-nav" href="#">
                    <FormattedMessage id="home-header.healthfacility" />
                  </NavLink>
                  <NavLink className="sub-nav" href="#">
                    <FormattedMessage id="home-header.choosehospitalclinic" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="main-nav" href="#">
                    <FormattedMessage id="home-header.doctor" />
                  </NavLink>
                  <NavLink className="sub-nav" href="#">
                    <FormattedMessage id="home-header.gooddoctor" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="main-nav" href="#">
                    <FormattedMessage id="home-header.examinationpackage" />
                  </NavLink>
                  <NavLink className="sub-nav" href="#">
                    <FormattedMessage id="home-header.generalhealthcheck" />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="right-header">
              <span className="support">
                <svg
                  className="question"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <FormattedMessage id="home-header.support" />
              </span>
              <div
                className={language === LANGUAGES.VI ? "vn active" : "vn"}
                onClick={() => this.hanldChangeLanguage(LANGUAGES.VI)}
              >
                vn
              </div>
              <div
                className={language === LANGUAGES.EN ? "en active" : "en"}
                onClick={() => this.hanldChangeLanguage(LANGUAGES.EN)}
              >
                en
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
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
