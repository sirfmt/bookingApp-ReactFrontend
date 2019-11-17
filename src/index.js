import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import RegForm from './components/RegForm';
import Root from './components/Root';
import {Router, browserHistory, IndexRoute} from "react-router";

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path="home" component={Home} />
                    <Route path={"register"} component={RegForm} />
                </Route>  
                
            </Router>
        );
        
    }
}
ReactDOM.render(<Root/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
