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


//  需要 saga 监听执行时 的写法
// export const incrementAction=()=>({
//   type:ActionTypes.INCREMENT_ACTION
// })
// export const decrementAction=()=>({
//   type:ActionTypes.DECREMENT_ACTION
// })