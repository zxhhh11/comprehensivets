import Constants from '../constants';
import {CommonReducer} from '../../utils/common'

let defaultState: CommonReducer = {
  openKeys:['presentation'],
  selectKey:'dashboard'
}
const commonReducer = (state=defaultState, action: any):CommonReducer =>{
   switch (action.type) {
      case Constants.SET_LAST_OPEN_KEY:
         return { ...state, openKeys:action.openKey};
      case Constants.SET_SELECT_KEY:
         return { ...state,selectKey:action.selectKey };
      case Constants.CLEAR_ALL:
         return {  openKeys:['presentation'],
         selectKey:'dashboard' };
      default:
         return state;
   }
};
export default commonReducer;