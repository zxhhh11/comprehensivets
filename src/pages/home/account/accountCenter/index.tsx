import * as React from 'react';
export interface AccountCenterProps {
  
}
 
export interface AccountCenterState {
  
}
 
class AccountCenter extends React.Component<AccountCenterProps, AccountCenterState> {
  constructor(props: AccountCenterProps) {
    super(props);
    this.state = { center:''  };
  }
  render() { 
    return (  <div>AccountCenter</div>);
  }
}
 
export default AccountCenter;