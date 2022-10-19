import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roleId: [],
  positionId: [],
  isLoadingGender: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let coppyState = { ...state };
      coppyState.genders = action.data;
      coppyState.isLoadingGender = true;
      // console.log("fire fecth gender start: ", action);
      return {
        ...coppyState,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      // console.log("fire fecth gender success: ", state);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_FAIL:
      // console.log("fire fecth gender fail: ", action);

      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_START:
      state.positionId = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positionId = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_FAIL:
      state.positionId = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_START:
      state.roleId = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roleId = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_FAIL:
      state.roleId = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
