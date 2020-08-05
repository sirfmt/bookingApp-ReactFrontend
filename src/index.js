import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, Link, browserHistory} from "react-router";
/*import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history'; */
import './index.css';
import * as serviceWorker from './serviceWorker';
import RegForm from './components/RegForm';
import Root from './components/Root';
import Home from './components/Home';
import FormSubmitted from './components/FormSubmitted';
import Contact from './components/Contact';
import About from './components/About';
import Stock from './components/stock';

class Appl extends React.Component{
    render(){
        return(
        <Router history = {browserHistory}>
            <Route path = "/" component = {Root}>
                <IndexRoute component = {Home} />
                <Route path = "home" component = {Home} />
                <Route path = "register" component = {RegForm} />
                <Route path = "about" component = {About} />
                <Route path = "contact" component = {Contact} />
                <Route path = "stock" component = {Stock} />
                <Route path = "checkout" component = {Stock} />
            </Route>
        </Router>
        ); 
    }
}

ReactDOM.render(<Appl/>, document.getElementById('root'));
serviceWorker.unregister();

export default Appl;
