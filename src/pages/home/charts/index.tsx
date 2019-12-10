import * as React from 'react';
export interface ChartsProps {
  
}
 
export interface ChartsState {
  
}
 
class Charts extends React.Component<ChartsProps, ChartsState> {
  constructor(props: ChartsProps) {
    super(props);
    this.state = { chart:12  };
  }
  render() { 
    return ( <div>Charts</div> );
  }
}
 
export default Charts;