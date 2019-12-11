import { Params, InjectedRouter } from 'react-router/lib/Router';
import { PlainRoute } from 'react-router';
import { RouteComponentProps} from 'react-router-dom';
import H from 'history';
interface Location extends H.Location{
  query: {[key: string]: string};
}


export interface RouterProps extends RouteComponentProps  {
  location?: Location;
  params?: Params;
  router?: InjectedRouter;
  routes?: PlainRoute[];
}