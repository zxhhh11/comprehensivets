import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login/index';
import NotFound from './pages/notFound';


interface Props {

}
interface State{

}
class App extends React.Component<Props,State>{
    constructor(props:Props){
    super(props)
    this.state ={
      
    }
    }
    render(){
      return(
        <div className="App">
          <Router>
          <Switch>
            <Route component={Login} path={`${process.env.PUBLIC_URL}/login`} />
            <Route component={NotFound} path={`${process.env.PUBLIC_URL}/404`} />
            <Route component={Home} path={`${process.env.PUBLIC_URL}/`} />
            {/* <PrivateRoute component={Home} path={`${process.env.PUBLIC_URL}/`} /> */}
          </Switch>
        </Router>
        </div>
      )
    }
}


export default App;



// const App: React.FC = () => {
//   return (
//     <div className="App">
//         <Home/>
//         {/* Home */}
//     </div>
//   );
// }
