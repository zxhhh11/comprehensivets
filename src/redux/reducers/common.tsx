import Constants from '../constants';

const commonReducer = (state = {openKeys:['sub1']}, action: any) => {
   switch (action.type) {
      case Constants.SET_LAST_OPEN_KEY:
         return { ...state, openKeys:action.lastOpenKey};
      case Constants.DECREMENT:
         return { ...state }
      default:
         return state;
   }
};
export default commonReducer;