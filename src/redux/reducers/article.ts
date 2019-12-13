import Constants from '../constants';

const articleReducer = (state = {}, action: any) => {
   switch (action.type) {
      case Constants.GET_NEWS:
         return { ...state, loading: true };
      case Constants.NEWS_RECEIVED:
         return { ...state, news: action.json[0], loading: false };
      case Constants.CLEAR_ALL:
         return {};
      default:
         return state;
   }
};
export default articleReducer;