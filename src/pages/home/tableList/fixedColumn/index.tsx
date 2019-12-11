import * as React from 'react';
export interface FixedColumnProps {
  
}
 
export interface FixedColumnState {
  
}
 
class FixedColumn extends React.Component<FixedColumnProps, FixedColumnState> {
  constructor(props: FixedColumnProps) {
    super(props);
    this.state = { fixed:''  };
  }
  render() { 
    return (<div>fixed column</div>  );
  }
}
 
export default FixedColumn;