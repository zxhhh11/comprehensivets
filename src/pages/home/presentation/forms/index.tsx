import * as React from 'react';
import { Component } from 'react';
export interface FormsProps {
  
}
 
export interface FormsState {
  
}
 
class Forms extends React.Component<FormsProps, FormsState> {
  constructor(props: FormsProps) {
    super(props);
    this.state = { form:{}  };
  }
  render() { 
    return ( <div>All Forms </div> );
  }
}
 
export default Forms;