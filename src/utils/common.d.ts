import { Params, InjectedRouter } from 'react-router/lib/Router';
import { PlainRoute } from 'react-router';
import { RouteComponentProps} from 'react-router-dom';
import H from 'history';


interface Location extends H.Location{
  query: {[key: string]: string};
}

/****************Props.location 参数类型定义********************/  
export interface RouterProps extends RouteComponentProps  {
  location?: Location;
  params?: Params;
  router?: InjectedRouter;
  routes?: PlainRoute[];
}

/****************history 参数类型定义********************/  
export interface HistoryBase {
  history?:H.History
}

export interface RoutersBase {
  key: string,
  icon: string|null,
  title: string,
  url:string,
  children: null|RoutersBase[]
}

export interface CommonReducer{
  openKeys:string[],
  selectKey:string
}

export interface UserBase{
  username:string,
  password:string
}