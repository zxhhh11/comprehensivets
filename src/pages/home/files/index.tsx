import * as React from 'react';
import { Component } from 'react';
export interface FilesProps {
  
}
 
export interface FilesState {
  
}
 
class Files extends React.Component<FilesProps, FilesState> {
  constructor(props: FilesProps) {
    super(props);
    this.state = { files:[]  };
  }
  render() { 
    return ( <div>Files Operation</div> );
  }
}
 
export default Files;