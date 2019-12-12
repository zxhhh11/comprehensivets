import Constants from '../constants';

const sagaTestReducer = (state = {num:0}, action: any) => {
   switch (action.type) {
      case Constants.INCREMENT:
         return { ...state, num:state.num+action.account};
      case Constants.DECREMENT:
         return { ...state, num:state.num-1 }
      default:
         return state;
   }
};
export default sagaTestReducer;