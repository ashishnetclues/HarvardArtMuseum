import {types} from './ActionTypes';

//setOrganizationList use in reducer
export const setOrganizationList = organizationList => ({
  type: types.ADDORGANIZATIONLIST,
  data: organizationList,
});

export const setExitAlert = flagvalue => ({
  type: types.SETEXITALERT,
  flag: flagvalue,
});

export const setPunchStatus = status => ({
  type: types.PUNCHSTATUS,
  status: status,
});

export const setLunchStatus = status => ({
  type: types.LUNCHSTATUS,
  status: status,
});
export const setScreenOrientation = screenMode => ({
  type: types.SCREENORIENTATION,
  orientation: screenMode,
});

export const setDeviceRegistered = value => ({
  type: types.DEVICEREGISTERED,
  status: value,
});

export const setCurrentTime = value => ({
  type: types.CURRENTTIME,
  data: value,
});
export const setUserPasscode = passcode => ({
  type: types.USERPASSCODE,
  passcode: passcode,
});
export const setDeviceUDID = udid => ({
  type: types.DEVICEUDID,
  data: udid,
});

export const setEmployeeData = dataEmp => ({
    type: types.EMP_DATA,
    data: dataEmp,
});

export const setEmployeeAttendance = attendance => ({
    type: types.EMP_ATTEND,
    data: attendance,
});

export const setOrgData = orgData => ({
    type: types.ORG_DATA,
    data: orgData,
});

export const setLogoFilePath = logoFilePath => ({
  type: types.LOGO_FILE_PATH,
  data: logoFilePath,
});
