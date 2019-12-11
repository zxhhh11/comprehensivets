import * as React from 'react';
export interface EditableProps {
  
}
 
export interface EditableState {
  
}
 
class Editable extends React.Component<EditableProps, EditableState> {
  constructor(props: EditableProps) {
    super(props);
    this.state = { edit:''  };
  }
  render() { 
    return ( <div>Editable</div> );
  }
}
 
export default Editable;