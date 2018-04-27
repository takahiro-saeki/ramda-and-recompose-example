import React, { Component } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const simpleHoc = ComposedComponent => {
  class Enhance extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return <ComposedComponent {...this.prosp} />
    }
  }
  
  hoistNonReactStatics(Enhance, ComposedComponent);
  return Enhance;
}

export default simpleHoc