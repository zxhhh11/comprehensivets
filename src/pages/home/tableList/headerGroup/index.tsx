import * as React from 'react';
export interface HeaderGroupProps {
  
}
 
export interface HeaderGroupState {
  
}
 
class HeaderGroup extends React.Component<HeaderGroupProps, HeaderGroupState> {
  constructor(props: HeaderGroupProps) {
    super(props);
    this.state = { header:''  };
  }
  render() { 
    return (<div>Header Group</div>  );
  }
}
 
export default HeaderGroup;