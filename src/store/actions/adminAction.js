import actionTypes from "./actionTypes";
import {
  getAllcodeService,
  createNewUserService,
} from "../../services/userService";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllcodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFail());
      }
    } catch (e) {
      dispatch(fetchGenderFail());
      console.log("Fetch gender start err: ", e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_POSITION_START,
      });
      let res = await getAllcodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchGenderFail());
      }
    } catch (e) {
      dispatch(fetchPositionFail());
      console.log("Fetch position start err: ", e);
    }
  };
};

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcodeService("ROLE");
      console.log("check res data server: ", res.data);
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFail());
      }
    } catch (e) {
      dispatch(fetchRoleFail());
      console.log("Fetch role start err: ", e);
    }
  };
};

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
});

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("check create user redux: ", res);
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
      } else {
        dispatch(saveUserFail());
      }
    } catch (e) {
      dispatch(saveUserFail());
      console.log("Save user fail err: ", e);
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFail = () => ({
  type: actionTypes.CREATE_USER_FAIL,
});

//code chuẩn của Redux
//start -> doing -> end
