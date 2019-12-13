import * as ActionTypes from './actionTypes'
import Constants from '../constants'
import {UserBase} from '../../utils/common'
export const getNews = ()=>(
     {
    type: ActionTypes.GET_NEWS
  }
)

export const incrementAction=(val:number)=>({
    type:Constants.INCREMENT,
    account:val
})
export const decrementAction=()=>({
    type:Constants.DECREMENT
})

export const setLastOpenKeyAn= (openKey:string[])=>({
    type:Constants.SET_LAST_OPEN_KEY,openKey
})

export const setSelectKeyAn= (selectKey:string)=>({
  type:Constants.SET_SELECT_KEY,selectKey
})


/************* about User**************************/
export const logoutClickAn=()=>({
  type:Constants.LOG_OUT
})

export const loginClickAn=(user:UserBase)=>({
  type:Constants.LOGIN_ACTION,user
})