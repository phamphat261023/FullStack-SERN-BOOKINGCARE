import React, { Component } from "react";
import "./userManage.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";

class ModalUpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "phamphat",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  toggle = () => {
    this.props.toggleModalEdit();
  };

  handleOnChangInput = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({
      ...coppyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddnewUser = () => {
    let isValidInput = this.checkValidateInput();
    if (isValidInput === true) {
      this.props.createNewUser(this.state);
    }
  };

  handleSaveChangesUser = () => {
    this.props.editUserInfo(this.state);
  };

  render() {
    return (
      <>
        <div>
          <Modal
            isOpen={this.props.isOpenModalsEdit}
            toggle={this.toggle}
            className={"modals-user-container"}
          >
            <ModalHeader toggle={this.toggle}>UPDATE USERS</ModalHeader>
            <ModalBody>
              <div className="modals-user-body">
                <div className="modals-user-content">
                  <div className="input-container">
                    <div>
                      <label>Email</label>
                    </div>
                    <input
                      className="modals-input"
                      type="text"
                      name="email"
                      disabled
                      value={this.state.email}
                      onChange={(event) =>
                        this.handleOnChangInput(event, "email")
                      }
                    />
                  </div>

                  <div className="input-container">
                    <div>
                      <label>Password</label>
                    </div>
                    <input
                      className="modals-input"
                      type="password"
                      name="password"
                      disabled
                      value={this.state.password}
                      onChange={(event) =>
                        this.handleOnChangInput(event, "password")
                      }
                    />
                  </div>
                </div>
                <div className="modals-user-content">
                  <div className="input-container">
                    <div>
                      <label>FirstName</label>
                    </div>
                    <input
                      className="modals-input"
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={(event) =>
                        this.handleOnChangInput(event, "firstName")
                      }
                    />
                  </div>

                  <div className="input-container">
                    <div>
                      <label>LastName</label>
                    </div>
                    <input
                      className="modals-input"
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={(event) =>
                        this.handleOnChangInput(event, "lastName")
                      }
                    />
                  </div>
                </div>
                <div className="modals-address">
                  <div>
                    <label>Address</label>
                  </div>
                  <input
                    type="text"
                    className="modals-input"
                    name="address"
                    value={this.state.address}
                    onChange={(event) =>
                      this.handleOnChangInput(event, "address")
                    }
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="px-3"
                onClick={() => this.handleSaveChangesUser()}
              >
                Save changes
              </Button>{" "}
              <Button color="secondary" className="px-3" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default ModalUpdateUser;
