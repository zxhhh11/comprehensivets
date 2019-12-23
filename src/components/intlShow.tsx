import React, { Component } from 'react';
import {
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Select,
  Transfer, } from 'antd';
  import moment from 'moment';
  const { Option } = Select;
  const { RangePicker } = DatePicker;

export interface IntlShowProps {
  
}
 
export interface IntlShowState {
  
}
 
class IntlShow extends Component<IntlShowProps, IntlShowState> {
  constructor(props:IntlShowProps) {
    super(props);
    this.state = {  visible: false }
  }
  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    return (<div className="locale-components">
    <div className="example">
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
    <div className="example">
      <Select showSearch style={{ width: 200 }}>
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
      </Select>
      <DatePicker />
      <TimePicker />
      <RangePicker style={{ width: 200 }} />
    </div>
    <div className="example">
      <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
    </div>
    <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
      <Calendar fullscreen={false} value={moment()} />
    </div>
  </div>);
  }
}
 
export default IntlShow;