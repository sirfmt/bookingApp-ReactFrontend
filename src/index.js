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

class Appl extends React.Component{
    render(){
        return(
        <Router history = {browserHistory}>
            <Route path = "/" component = {Root}>
                <IndexRoute component = {Home} />
                <Route path = "home" component = {Home} />
                <Route path = "register" component = {RegForm} />
                <Route path = "complete" component = {FormSubmitted} />
            </Route>
        </Router>
        ); 
    }
}

ReactDOM.render(<Appl/>, document.getElementById('root'));
serviceWorker.unregister();

export default Appl;
