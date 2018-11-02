import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Test from './components/Test'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Navbar />
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/:post_id" component={Post} />
            <Route path="/Test" component={Test}  />
          </Switch>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
