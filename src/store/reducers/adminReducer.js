import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roleId: [],
  positionId: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("fire fecth gender start: ", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      let coppyState = { ...state };
      coppyState.genders = action.data;
      console.log("fire fecth gender success: ", coppyState);
      return {
        ...coppyState,
      };

    case actionTypes.FETCH_GENDER_FAIL:
      console.log("fire fecth gender fail: ", action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
