import React from "react";
import '../about.css';

export class About extends React.Component {
    render (){
        return(
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
  
        );
    }

}
export default About;