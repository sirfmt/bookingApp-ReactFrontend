import React from "react";
import '../form.css';
import '../nav.css';
export class Contact extends React.Component{

   render(){
       return(
<div className="container">

   <div className="row">
       <form className="col-md-9" action="/submit" method="post">
           <h2>Feedback:</h2>
          
           <div className="form-group">
           <input id="first_name" name="firstName" type="text" className="form-control" required/>
           <label for="name">First Name</label>
           </div>

           <div className="form-group">
           <input id="last_name" name="lastName" type="text" className="form-control" required/>
           <label for="name">Last Name</label>
           </div>

           <div className="form-group">
           <input id="phone" name="phone" type="tel" className="form-control" required/>
           <label for="phone">Primary Phone</label>
           </div>

           <div className="form-group">
           <textarea id="message" name="phone" className="form-control" required></textarea>
           <label for="message">Message</label>
           </div>

           <button className="btn btn-large">Submit </button>
       </form>
         </div>
   </div>
       )  ;
   }
}

export default Contact;