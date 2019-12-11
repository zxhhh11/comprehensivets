import * as React from 'react';
import { Route, Switch as RouteSwitch, Redirect, withRouter } from 'react-router-dom';
import Dashboard from './dashboard';
import Forms from './forms';
import Lists from './lists';
export interface PresentationProps {
  
}
 
export interface PresentationState {
  
}
 
class Presentation extends React.Component<PresentationProps, PresentationState> {
  constructor(props: PresentationProps) {
    super(props);
    this.state = { presentation:''  };
  }
  render() { 
    return (  <RouteSwitch>
      <Route component={Dashboard} exact path={`${process.env.PUBLIC_URL}/presentation/dashboard`}></Route>
      <Route component={Forms} exact path={`${process.env.PUBLIC_URL}/presentation/forms`}></Route>
      <Route component={Lists} exact path={`${process.env.PUBLIC_URL}/presentation/lists`}></Route>
      <Redirect
        exact
        path={`${process.env.PUBLIC_URL}/presentation`}
        to={`${process.env.PUBLIC_URL}/presentation/dashboard`}
      ></Redirect>
      <Redirect from='*' to='/404' />
    </RouteSwitch> );
  }
}
 
export default Presentation;