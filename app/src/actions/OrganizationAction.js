import {types} from './ActionTypes';

//setOrganizationList use in reducer
export const setDataList = dataList => ({
  type: types.ADDDATALIST,
  data: dataList,
});


