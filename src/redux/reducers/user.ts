import Constants from '../constants';

const userReducer = (state = {}, action: any) => {
   switch (action.type) {
      case  Constants.CLEAR_ALL:
         return {  };
      case Constants.LOGIN_ACTION:
         return { ...state, user: action.user, loading: false };
      case Constants.CLEAR_ALL:
         return {};
      default:
         return state;
   }
};
export default userReducer;