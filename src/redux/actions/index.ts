import * as ActionTypes from './actionTypes'
import Constants from '../constants'

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

export const setLastOpenKeyA= (openKey:string[])=>({
    type:Constants.SET_LAST_OPEN_KEY,openKey
})

export const setSelectKeyA= (selectKey:string)=>({
  type:Constants.SET_SELECT_KEY,selectKey
})


