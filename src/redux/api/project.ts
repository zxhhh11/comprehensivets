import axios from 'axios';


// const serverUrl(apiName:any):any {
//   return apiName;
//   // return `/api${apiName}`;
// };
function serverUrl(apiName:string):string{
  return apiName
   // return `/api${apiName}`;
}
// const serverPre = ajax.serverUrl;
const serverName:string = '/project-manage/';

export function getProjectListApi(data:any):any {
  return axios.get(serverUrl(`${serverName}project/list`), data);
}

export function updateProjectApi(data:any):any {
  return axios.post(serverUrl(`${serverName}project/update`), data);
}

