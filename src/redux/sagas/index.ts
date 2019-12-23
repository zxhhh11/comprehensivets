
import axios from 'axios';
import * as ActionTypes from '../actions/actionTypes';
import Constants from '../constants'
import {put,takeLatest,all,takeEvery,throttle,select} from 'redux-saga/effects';
import {getProjectListApi,updateProjectApi}from '../api/project';
import {logoutApi,loginApi} from '../api/user'
// import Constants from '../constants';
import {history} from '../../utils/history';

export const getUsers = (state: { user: any; }) => state.user;
// export const getAuth = (state: { auth: any; }) => state.auth;
// export const getEntries = (state: { entries: any; }) => state.entries;
  function* fetchLists() {
    // yield getProjectListApi(null)
    //         .then((response: any)=>{
    //           if(response.status===200){
    //             console.log(response.data.data)
    //             yield put({type:Constants.SET_LIST_DATA,data:response.data.data})  // A 'yield' expression is only allowed in a generator body.ts(1163)
    //           }
           
    //         return response
    //       })
    //       .catch((error: any)=>{
    //         console.log(error)
    //         return error
    //       })
    // yield put({ type: Constants.NEWS_RECEIVED, json: json.articles });
    try{
     const response= yield getProjectListApi(null)
          if(response.status===200){
        console.log(response.data.data.list)
        yield put({type:Constants.SET_LIST_DATA,data:response.data.data.list})  // A 'yield' expression is only allowed in a generator body.ts(1163)
      }
    }
    catch(e){
      console.log(e)
    }
  }


  // function* actionWatcher() {
  //   // let account:number =3
  //     yield takeLatest(ActionTypes.GET_LISTS, fetchNews)
      
  //     // throttle  可以实现 在规定时间内只执行最后一次调用 效果等效于函数的节流
  //     // yield throttle(2000,ActionTypes.INCREMENT_ACTION,incrementAsync,account);
  //     // yield throttle(1000,ActionTypes.DECREMENT_ACTION,decrementAsync);
  // }
    function* userLogout(){
      try{
          yield logoutApi()
          history.push(`${process.env.PUBLIC_URL}/login`)
          // yield put({type:Constants.CLEAR_ALL})
      }
      catch(e){
        console.log(e)
      }
    }

    function* userLogin(){
      const auth = yield select(getUsers);
      try{
      const login =   yield loginApi(auth.user)
        console.log(login)
        history.push(`${process.env.PUBLIC_URL}/`)
       
    }
    catch(e){
      console.log(e)
    }
    }
  export default function* rootSaga() {
     yield all([
        //  actionWatcher()  // 写法一 可以先将几个saga定义在一个函数里  然后通过调用这个函数 来实现监听saga 
        takeLatest(ActionTypes.GET_LISTS, fetchLists),// 写法二 将要监听的saga 异步函数一次写在此数组内
        takeLatest(Constants.LOG_OUT, userLogout),
        takeLatest(Constants.LOGIN_ACTION, userLogin)
     ]);
  }