import {types} from '../actions/ActionTypes';

const initialState = {
    organizationArray: [],
    exitAlert: false,
    punchStatus: '',
    lunchStatus: '',
    screnOrientation: false, //false = protrait, true = landscape
    deviceRegistered: false, //false
    currntTime: '',
    userPasscode: '',
    deviceUDID: '',
    employeeData: [],
    employeeAttendance: {},
    orgData: {},
    logoFilePath:''
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDORGANIZATIONLIST:
      console.log('from Reducer' + JSON.stringify(action));
      return {
        ...state,
        organizationArray: action.data,
      };
    case types.SETEXITALERT:
      return {
        ...state,
        exitAlert: !state.exitAlert,
      };
    case types.SCREENORIENTATION:
      return {
        ...state,
        screnOrientation: action.orientation,
      };
      default:
          return state;
  }
};

export default OrganizationReducer;
