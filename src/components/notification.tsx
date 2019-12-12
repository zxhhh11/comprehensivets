import * as React from 'react';
export interface NotificationProps {
  
}
 
export interface NotificationState {
  
}
 
class Notification extends React.Component<NotificationProps, NotificationState> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = { notification:''  };
  }
  render() { 
    return (<div>notification</div>  );
  }
}
 
export default Notification;