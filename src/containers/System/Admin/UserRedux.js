import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import "./userRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      roleArr: [],
      positionArr: [],
      previewImgUrl: "",
      isOpen: false,

      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      positionId: "",
      roleId: "",
      images: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    // try {
    //   let res = await getAllcodeService("gender");
    //   let resPosition = await getAllcodeService("position");
    //   let resRole = await getAllcodeService("role");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //       roleArr: resRole.data,
    //       positionArr: resPosition.data,
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //render => didUpdate
    //hiện tại (this) và quá khứ (prev)
    //[] => [3]
    if (prevProps.genderRedux !== this.props.genderRedux) {
      let arrGenders = this.props.genderRedux;
      this.setState({
        genderArr: arrGenders,
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : "",
      });
    }

    if (prevProps.positionRedux !== this.props.positionRedux) {
      let arrPosition = this.props.positionRedux;
      this.setState({
        positionArr: arrPosition,
        position:
          arrPosition && arrPosition.length > 0 ? arrPosition[0].key : "",
      });
    }

    if (prevProps.roleRedux !== this.props.roleRedux) {
      let arrRole = this.props.roleRedux;
      this.setState({
        roleArr: arrRole,
        role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
      });
    }
  }

  handleOnChange = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objUrl = URL.createObjectURL(file);
      this.setState({
        previewImgUrl: objUrl,
        images: file,
      });
    }
  };

  OpenPreviewImg = () => {
    if (!this.state.previewImgUrl) {
      return;
    }
    this.setState({
      isOpen: true,
    });
  };

  onChangeInput = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({
      ...coppyState,
    });
  };

  handleValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveNewUser = () => {
    let check = this.handleValidateInput();
    if (check === false) return;
    this.props.createNewUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
      roleId: this.state.roleId,
      positionId: this.state.positionId,
    });
  };

  render() {
    let genders = this.state.genderArr;
    let position = this.state.positionArr;
    let role = this.state.roleArr;
    let language = this.props.language;
    let isLoadingGender = this.props.isLoadingGender;

    let {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      positionId,
      roleId,
      images,
    } = this.state;
    return (
      <>
        <div className="user-redux-container">
          <div className="title">USER REDUX WITH PHAM PHAT</div>
          {this.state.isOpen === true && (
            <Lightbox
              mainSrc={this.state.previewImgUrl}
              onCloseRequest={() => this.setState({ isOpen: false })}
            />
          )}

          <div className="user-redux-body">
            {isLoadingGender === true ? "Loading....." : ""}
            <div className="title-add text-center mt-3 mb-3">
              <FormattedMessage id="manage-user.add-user" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.email" />
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    values={email}
                    onChange={(event) => this.onChangeInput(event, "email")}
                  />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.password" />
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(event) => this.onChangeInput(event, "password")}
                  />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.firstName" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={firstName}
                    onChange={(event) => this.onChangeInput(event, "firstName")}
                  />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.lastName" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={lastName}
                    onChange={(event) => this.onChangeInput(event, "lastName")}
                  />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.phoneNumber" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={phoneNumber}
                    onChange={(event) =>
                      this.onChangeInput(event, "phoneNumber")
                    }
                  />
                </div>
                <div className="col-9">
                  <label>
                    <FormattedMessage id="manage-user.address" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={address}
                    onChange={(event) => this.onChangeInput(event, "address")}
                  />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => this.onChangeInput(event, "gender")}
                  >
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, index) => {
                        return (
                          <>
                            <option selected key={index} value={item.key}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          </>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.positionId" />
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) =>
                      this.onChangeInput(event, "positionId")
                    }
                  >
                    {position &&
                      position.length > 0 &&
                      position.map((item, index) => {
                        return (
                          <option selected key={index} value={item.key}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.roleId" />
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => this.onChangeInput(event, "roleId")}
                  >
                    {role &&
                      role.length > 0 &&
                      role.map((item, index) => {
                        return (
                          <option selected key={index} value={item.key}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.images" />
                  </label>
                  <div>
                    <input
                      id="previewImg"
                      type="file"
                      hidden
                      onChange={(event) => this.handleOnChange(event)}
                    />
                    <label className="upload-img" htmlFor="previewImg">
                      Tải ảnh lên
                      <i className="fas fa-upload"></i>
                    </label>
                    <div
                      className="preview-img"
                      onClick={() => this.OpenPreviewImg()}
                      style={{
                        backgroundImage: `url(${this.state.previewImgUrl})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary mt-3"
                    onClick={() => this.handleSaveNewUser()}
                  >
                    <FormattedMessage id="manage-user.save" />
                  </button>
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
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
    positionRedux: state.admin.positionId,
    roleRedux: state.admin.roleId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    createNewUser: (data) => dispatch(actions.createNewUser(data)),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) =>
    //   dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
