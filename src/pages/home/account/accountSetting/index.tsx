import * as React from 'react';
export interface AccountSettingProps {
  
}
 
export interface AccountSettingState {
  
}
 
class AccountSetting extends React.Component<AccountSettingProps, AccountSettingState> {
  constructor(props: AccountSettingProps) {
    super(props);
    this.state = { AccountSetting:''  };
  }
  render() { 
    return (<div>AccountSetting</div>  );
  }
}
 
export default AccountSetting;