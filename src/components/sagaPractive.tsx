import * as React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';

import {incrementAction,decrementAction} from '../redux/actions/index';


export interface CounterProps {
  incrementClick:(num:number)=>any
  decrementClick:()=>void
  num:number
}
 
export interface CounterState {

}
 
class Counter extends React.Component<CounterProps,CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {};
  }
  render() { 
  let {incrementClick,num,decrementClick} = this.props;
  return ( 
  <div>
    <h2>{num}</h2>
    <Button type="primary" onClick={incrementClick.bind(this,3)}>Increment</Button>
    <Button type="danger"  onClick={decrementClick}>Decrement</Button>
  </div> );
  }
}
const mapStateToProps =(state:any)=>({
  num: state.sagaTest.num
})
const mapDispatchToProps = {
  incrementClick:(num:number)=>incrementAction(num), // action 传参
  decrementClick:decrementAction                     // action 不传参
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);