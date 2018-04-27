import React, { Component } from 'react';
import simpleHoc from '../../module/simpleHoc';

class HoistTest extends Component {
  
  static count(num) {
    return num
  }
  
  static add(a = 0, b = 0) {
    return a + b
  }
  
  static internal() {
    return 'this is internal'
  }
  
  render() {
    return (
      <div>test</div>
    )
  }
}

export default simpleHoc(HoistTest);
