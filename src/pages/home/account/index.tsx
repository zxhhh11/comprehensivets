import * as React from 'react';
import { Route, Switch as RouteSwitch, Redirect, withRouter } from 'react-router-dom';
import AccountCenter from './accountCenter/index'
import AccountSetting from './accountSetting/index'
export interface AccountProps {
  
}
 
export interface AccountState {
  
}
 
class Account extends React.Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props);
    this.state = { account: '' };
  }
  render() { 
    return (<RouteSwitch>
      <Route component={AccountCenter} exact path={`${process.env.PUBLIC_URL}/account/center`}></Route>
      <Route component={AccountSetting} exact path={`${process.env.PUBLIC_URL}/account/setting`}></Route>
      <Redirect
        exact
        path={`${process.env.PUBLIC_URL}/account`}
        to={`${process.env.PUBLIC_URL}/account/center`}
      ></Redirect>
      <Redirect from='*' to='/404' />
    </RouteSwitch>  );
  }
}
 
export default Account;