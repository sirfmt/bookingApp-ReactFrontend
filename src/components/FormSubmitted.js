import React from "react";
import Header from './Header';
import '../nav.css';


export class FormSubmitted extends React.Component {
    render (){
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                    </div>
                </div>

                <div>
                     <b> Form Successfully Submitted, Customer Support will be in touch soon ! </b>
                 </div>
                <footer>
                <b> fmt production 2019</b>
                </footer>
            </div>
            
        );
    }

}
export default FormSubmitted;