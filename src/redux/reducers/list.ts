import Constants from '../constants';
import {ListReducer} from '../../utils/common'

let defaultState:ListReducer = {
   lists:[],
   
}
const listReducer = (state = defaultState, action: any):ListReducer => {
   switch (action.type) {
      case Constants.GET_LISTS:
         return { ...state, loading: true };
      case Constants.NEWS_RECEIVED:
         return { ...state, news: action.json[0], loading: false };
      case Constants.SET_LIST_DATA:
            return { ...state, lists: action.data, loading: false };
      case Constants.SENT_ROW_LIST:
         return {...state,row:action.row}
      case Constants.CLEAR_ALL:
         return defaultState;
      default:
         return state;
   }
};
export default listReducer;