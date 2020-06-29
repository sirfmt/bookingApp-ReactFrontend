import React from "react";

export class Home extends React.Component{
    render(){
        return(
            <div className="home" >
                <h1> Welcome to the Booking Appointment Application! </h1>
                
                <p> This application lets you schedule an appointment with our organisation, 
                    allowing you to specify your requested need and appropriate timing so that 
                    our Engineers can come and attend to your technical needs.
                </p>
                
            </div>  
        );
    }  
}

export default Home;