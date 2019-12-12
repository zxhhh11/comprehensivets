import Constants from '../constants';
import {CommonReducer} from '../../utils/common'

let defaultState: CommonReducer = {
  openKeys:['presentation'],
  selectKey:'dashboard'
}
const commonReducer = (state=defaultState, action: any):CommonReducer =>{
  console.log(action)
   switch (action.type) {
      case Constants.SET_LAST_OPEN_KEY:
         return { ...state, openKeys:action.openKey};
      case Constants.SET_SELECT_KEY:
         return { ...state,selectKey:action.selectKey }
      default:
         return state;
   }
};
export default commonReducer;