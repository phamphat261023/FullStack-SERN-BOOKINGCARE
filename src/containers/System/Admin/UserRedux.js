import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      roleArr: [],
      positionArr: [],
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
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
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
  }

  render() {
    let genders = this.state.genderArr;
    // let roleId = this.state.roleArr;
    // let positionId = this.state.positionArr;
    let language = this.props.language;
    console.log("check props from redux: ", this.props.genderRedux);
    return (
      <>
        <div className="user-redux-container">
          <div className="title">USER REDUX WITH PHAM PHAT</div>
          <div className="user-redux-body">
            <div className="title-add text-center mt-3 mb-3">
              <FormattedMessage id="manage-user.add-user" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.email" />
                  </label>
                  <input className="form-control" type="email" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.password" />
                  </label>
                  <input className="form-control" type="password" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.firstName" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.lastName" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.phoneNumber" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-9">
                  <label>
                    <FormattedMessage id="manage-user.address" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, index) => {
                        return (
                          <>
                            <option selected key={index}>
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
                  >
                    {/* {positionId &&
                      positionId.length > 0 &&
                      positionId.map((item, index) => {
                        return (
                          <option selected key={index}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })} */}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.roleId" />
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {/* {roleId &&
                      roleId.length > 0 &&
                      roleId.map((item, index) => {
                        return (
                          <option selected key={index}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })} */}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.images" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div>
                  <button type="submit" class="btn btn-primary mt-3">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) =>
    //   dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
