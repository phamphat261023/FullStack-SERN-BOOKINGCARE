import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  updateUserService,
} from "../../services/userService";
import "./userManage.scss";
import ModalAddNew from "./ModalAddNew";
import ModalUpdateUser from "./ModalUpdateUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      isOpenModalsAddNew: false,
      isOpenModalsEdit: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAllUserFromReact();
  }

  getAllUserFromReact = async () => {
    try {
      let respone = await getAllUsers("ALL");
      if (respone && respone.errCode === 0) {
        this.setState({
          allUsers: respone.users,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleAddNew = () => {
    this.setState({
      isOpenModalsAddNew: true,
    });
  };

  handleToggleModal = () => {
    this.setState({
      isOpenModalsAddNew: !this.state.isOpenModalsAddNew,
    });
  };

  handleEditUser = (user) => {
    this.setState({
      isOpenModalsEdit: true,
      userEdit: user,
    });
  };

  handleToggleEditModal = () => {
    this.setState({
      isOpenModalsEdit: !this.state.isOpenModalsEdit,
    });
  };

  createNewUser = async (data) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.createUser.errCode !== 0) {
        alert(res.createUser.errMessage);
      } else {
        await this.getAllUserFromReact();
        this.setState({
          isOpenModalsAddNew: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let res = await deleteUserService(user.id);
      if (res && res.userDelete.errCode === 0) {
        await this.getAllUserFromReact();
        this.setState({
          isOpenModalsAddNew: false,
        });
      } else {
        alert(res.userDelete.errMessage);
      }
      console.log("check res delete from server: ", res);
    } catch (e) {
      console.log(e);
    }
  };

  editUserInfo = async (user) => {
    try {
      let res = await updateUserService(user);
      if (res && res.dataEdit.errCode === 0) {
        await this.getAllUserFromReact();
        this.setState({
          isOpenModalsEdit: false,
        });
      } else {
        alert(res.dataEdit.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let allUsers = this.state.allUsers;
    return (
      <>
        <div className="user-container">
          <ModalAddNew
            isOpenModalsAddNew={this.state.isOpenModalsAddNew}
            toggleModal={this.handleToggleModal}
            createNewUser={this.createNewUser}
          />
          {this.state.isOpenModalsEdit && (
            <ModalUpdateUser
              isOpenModalsEdit={this.state.isOpenModalsEdit}
              toggleModalEdit={this.handleToggleEditModal}
              currentUser={this.state.userEdit}
              editUserInfo={this.editUserInfo}
            />
          )}
          <div className="user-title text-center">
            User manage with Pham Phat
          </div>
          <div className="text-center">
            <button onClick={() => this.handleAddNew()} className="btn-add-new">
              + Add new users
            </button>
          </div>
          <div className="user-table">
            <table id="customers">
              <tr>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>

              {allUsers &&
                allUsers.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td> {item.email} </td>
                        <td> {item.firstName} </td>
                        <td> {item.lastName} </td>
                        <td> {item.address} </td>
                        <td>
                          <button
                            type="submit"
                            onClick={() => this.handleEditUser(item)}
                            className="btn-edit"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            type="submit"
                            onClick={() => this.handleDeleteUser(item)}
                            className="btn-delete"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
