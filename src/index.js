import React, { Component } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import './style.less';

class Index extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>layout,index</h1>
        <hr />
        <br />
        <div className="set-rem">哈哈哈</div>
        <Button>default</Button><WhiteSpace />
      </div>
    );
  }
}

export default Index;

