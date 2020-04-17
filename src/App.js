import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Component/NavBar'
import ProductList from './Component/ProductList';
import Details from './Component/Details';
import Cart from './Component/Cart';
import Default from './Component/Default';


class App extends Component {
  render() {
    return (
      
        <Fragment>
            <NavBar/>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/cart" component={Cart}/>
                <Route component={Default}/>
              </Switch>
            </BrowserRouter>
        </Fragment>
      
    )
  }
}

export default App

//npm install --save react-router-dom
