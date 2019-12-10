import * as React from 'react';
import { Component } from 'react';
export interface ListsProps {
  
}
 
export interface ListsState {
  
}
 
class Lists extends React.Component<ListsProps, ListsState> {
  constructor(props: ListsProps) {
    super(props);
    this.state = { Lists: [] };
  }
  render() { 
    return (<div>Lists</div>  );
  }
}
 
export default Lists;