import * as React from 'react';
import { Component } from 'react';
// import NewItems from '../../../../components/NewsItem';
import IntlShow from '../../../../components/intlShow';
import Counter from '../../../../components/sagaPractive';
import {Button,DatePicker} from 'antd';
import { connect } from 'react-redux';
import { getLists } from '../../../../redux/actions/index';
import intl from 'react-intl-universal';
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
    return ( <div>
        <DatePicker style={{marginRight:"20px"}} />
        <Button type="primary" onClick={this.props.handleClick}>{intl.get('getData')}&nbsp;</Button>
      <Counter></Counter>
      <IntlShow></IntlShow>
      {/* <NewItems></NewItems> */}
    </div> );
  }
}
const mapStateToProps=()=>{
  return {

  }
}
const mapDispatchToProps = {
 
  handleClick: getLists

}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);