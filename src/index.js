import React, {Component} from 'react';
import {Button} from 'antd-mobile';
import {Link} from 'react-keeper';
import './style.less';

class Index extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    const t = this;
    return (
      <div className="index">
        <h1>layout,index</h1>
        <hr/>
        <div className="set-rem"> 参数 id:{t.props.params.id}</div>
        <Button type="primary">
          <Link to='/Products/app'>to app</Link>
        </Button>
      </div>
    );
  }
}

export default Index;

