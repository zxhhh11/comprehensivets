import axios, { AxiosResponse } from 'axios';
function serverUrl(apiName:string):string{
  return apiName
   // return `/api${apiName}`;
}
// const serverPre = ajax.serverUrl;
const serverName = '/ms-base-server/';

export function logoutApi():Promise<AxiosResponse<any>> {
  return axios.post(serverUrl(`${serverName}jwt/logout`));
}

export function loginApi(user:any):Promise<AxiosResponse<any>> {
  return axios.post(serverUrl(`${serverName}jwt/token`),user);
}