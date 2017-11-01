import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-keeper";
import Layout1 from "./src/index";
import NotFound from "./src/NotFound";
import {Button, WhiteSpace} from "antd-mobile";
import "./index.less";


const hostUser = {id: 'ASDFSDFG', name: '马化腾'};

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/app" component={App}/>
          <Route hostUser={ hostUser } index path="/index/(:id)" component={Layout1}/>
          <Route path="/back" component={Layout1}/>
          <Route miss component={ NotFound }/>
        </div>
      </HashRouter>
    );
  }
}


function App() {
  console.log(this);
  return (
    <div>
      <h1>App</h1>
      <div className="set-rem">rem</div>
      <Button>default</Button><WhiteSpace />

    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
