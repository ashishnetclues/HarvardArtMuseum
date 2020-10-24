import {types} from '../actions/ActionTypes';

const initialState = {
    dataArray: [],
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDDATALIST:
      console.log('from Reducer' + JSON.stringify(action));
      return {
        ...state,
        dataArray: action.data,
      };
      default:
          return state;
  }
};

export default OrganizationReducer;
