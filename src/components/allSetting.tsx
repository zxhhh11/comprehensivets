import * as React from 'react';
import { Drawer, Button } from 'antd';


export interface AllSettingProps {
  drawerVisible:boolean,
  onCloseClick:()=>void
}
 
export interface AllSettingState {
  
}
 
class AllSetting extends React.Component<AllSettingProps, AllSettingState> {
  constructor(props: AllSettingProps) {
    super(props);
    this.state = {  };
  }
  
  render() { 
    return ( <div>
      <Drawer
        title="All Setting"
        placement="right"
        width={320}
        closable={true}
        onClose={this.props.onCloseClick}
        visible={this.props.drawerVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
    );
  }
}
 
export default AllSetting;