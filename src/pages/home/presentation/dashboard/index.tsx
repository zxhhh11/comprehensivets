import * as React from 'react';
import { Component } from 'react';
import NewItems from '../../../../components/NewsItem';
import TableList from '../../../../components/TableList';
import Counter from '../../../../components/sagaPractive';
import {Button} from 'antd';
import { connect } from 'react-redux';
import { getNews } from '../../../../redux/actions/index';
export interface DashboardProps {
  handleClick: () => any,
}
 
export interface DashboardState {
  
}
 
class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = { dashboard:''  };
  }
  render() { 
    return ( <div>Dashboard
      &nbsp;
    <Button type="primary" onClick={this.props.handleClick}>Test Saga</Button>
      <Counter></Counter>
      <TableList></TableList>
      <NewItems></NewItems>
    </div> );
  }
}
const mapStateToProps=()=>{
  return {

  }
}
const mapDispatchToProps = {
 
  handleClick: getNews

}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);