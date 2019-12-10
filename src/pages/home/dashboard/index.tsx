import * as React from 'react';
import { Component } from 'react';
export interface DashboardProps {
  
}
 
export interface DashboardState {
  
}
 
class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = { dashboard:''  };
  }
  render() { 
    return ( <div>Dashboard</div> );
  }
}
 
export default Dashboard;