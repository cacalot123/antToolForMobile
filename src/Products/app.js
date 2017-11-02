import React, {Component} from 'react';
import {Button} from 'antd-mobile';
import {Link} from 'react-keeper';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    const t = this;
    return (
      <div className="app">
        <h1>App</h1>
        <hr/>
        <Button type="primary">
          <Link to='/index'>to index</Link>
        </Button>
      </div>
    );
  }
}

export default App;

