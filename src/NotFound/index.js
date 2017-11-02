import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    return (<div className="NotFound">
      404
            </div>);
  }
}
export default NotFound;
