import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
import Welcome from './components/welcome'
import Product from './containers/Product'
import AddItem from './containers/AddItem'
import Login from './components/login'
import Signup from './components/signup'
import Success from './components/success'
import cookie from 'cookie'

const checkAuth = () => {
    
    const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
  };

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth() === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/product/:id" component={Product} />
            <ProtectedRoute path="/addItem" component={AddItem} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route exact path="/success" component={Success}/>

        </Switch>
    );
};

export default Router;