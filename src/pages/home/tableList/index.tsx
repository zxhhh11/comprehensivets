import * as React from 'react';
import { Route, Switch as RouteSwitch, Redirect, withRouter } from 'react-router-dom';
import Editable from './editable';
import FixedColumn from './fixedColumn';
import HeaderGroup from './headerGroup';
export interface TableListProps {
  
}
 
export interface TableListState {
  
}
 
class TableList extends React.Component<TableListProps, TableListState> {
  constructor(props: TableListProps) {
    super(props);
    this.state = { list:''  };
  }
  render() { 
    return (  <RouteSwitch>
      <Route component={FixedColumn} exact path={`${process.env.PUBLIC_URL}/tableList/fixedColumn`}></Route>
      <Route component={HeaderGroup} exact path={`${process.env.PUBLIC_URL}/tableList/headerGroup`}></Route>
      <Route component={Editable} exact path={`${process.env.PUBLIC_URL}/tableList/editable`}></Route>
      <Redirect
        exact
        path={`${process.env.PUBLIC_URL}/tableList`}
        to={`${process.env.PUBLIC_URL}/tableList/fixedColumn`}
      ></Redirect>
      <Redirect from='*' to='/404' />
    </RouteSwitch> );
  }
}
 
export default TableList;