import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-keeper';
import Layout1 from './src/index';
import NotFound from './src/NotFound';
import App from './src/Products/app';
import './index.less';


const hostUser = {id: 'ASDFSDFG', name: '马化腾'};
const Products = () => {
  return (
    <div>
      <Route component={App} path="/app"/>
    </div>
  )
}


class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/Products" component={Products}/>
          <Route hostUser={hostUser} index path="/index(/:id)" component={Layout1}/>
          <Route path="/back" component={Layout1}/>
          <Route miss component={NotFound}/>
        </div>
      </HashRouter>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById('root'));
