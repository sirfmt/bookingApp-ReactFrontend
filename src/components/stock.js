import React from "react";
import '../about.css';
import slaz from '../photos/slazenger hoody.PNG';
import soulcal from '../photos/soulcalred.PNG';
import everlasthoody from '../photos/everlasthoody.PNG';
import nbcrew from '../photos/new balance.PNG';
import pumacrew from '../photos/puma white crew.PNG';
import everlastjogger from '../photos/everlast joggers.PNG';
import slazsweater from '../photos/slazenger sweater front.PNG';
import everlastsweater from '../photos/everlast sweater.png';
import converseankle from '../photos/converse ankle 2.PNG';
import conversecrew from '../photos/converse black.PNG';
import dunlopcrew from '../photos/dunlop crew.PNG';
import champion from '../photos/Champion pack.PNG';


export class Stock extends React.Component {
    render (){
        return(
            
           <div class = "container">
                <div class ="row justify-content-start">
                    <div class="col-md-4 box">
                        <h4>Product 1</h4>
                        <img src ={slaz} alt="logo" />
                        <p class ="prodtitle">Slazenger Hoody $25</p>
                        <button className="btn btn-large" class = "addbutton" class="addcart">Add to Cart </button>
                    </div>

                    <div class="col-md-4 box">
                        <h4>Product 2</h4>
                        <img src ={soulcal} alt="logo"></img>
                        <p class ="prodtitle">Soul Cal Hoody $40 </p>
                        <button className="btn btn-large" class="addcart">Add to Cart </button>
                    </div>

                    <div class="col-md-4 box">
                        <h4>Product 3</h4>
                        <img src ={everlasthoody} alt="logo"></img>
                        <p class ="prodtitle">Everlast Hoody $25 </p>
                        <button className="btn btn-large" class="addcart">Add to Cart </button>
                    </div>

                <div/>

                <div class = "row justify-content-start">
                    <div class="col-md-4 box">
                        <h4>Product 4</h4>
                        <img src ={champion} alt="logo"></img>
                        <p class ="prodtitle">Champion Crew Socks $5 </p>
                        <button className="btn btn-large" class="addcart">Add to Cart </button>
                    </div>

                    <div class="col-md-4 box">
                        <h4>Product 5</h4>
                        <img src ={pumacrew} alt="logo"></img>
                        <p class ="prodtitle">Puma Crew Socks $4 </p>
                        <button className="btn btn-large" class="addcart">Add to Cart </button>
                    </div>

                    <div class="col-md-4 box">
                        <h4>Product 6</h4>
                        <img src ={nbcrew} alt="logo"></img>
                        <p class ="prodtitle">NB Crew Socks $4 </p>
                        <button className="btn btn-large" class="addcart">Add to Cart </button>
                    </div>
                </div>
           
                        <div class ="row justify-content-start">
                            <div class="col-md-4 box">
                                <h4>Product 7</h4>
                                <img src ={slazsweater} alt="logo"></img>
                                <p class ="prodtitle"> Slazenger Sweater $20 </p>
                                <button className="btn btn-large" class="addcart">Add to Cart </button>
                            </div>

                            <div class="col-md-4 box">
                                <h4>Product 8</h4>
                                <img src ={everlastsweater}></img>
                                <p class ="prodtitle">Everlast Sweater $20 </p>
                                <button className="btn btn-large" class="addcart">Add to Cart </button>
                            </div>

                            <div class="col-md-4 box">
                                <h4>Product 9</h4>
                                <img src ={everlastjogger} alt="logo"></img>
                                <p class ="prodtitle">Everlast Sweatpants Premium $40 </p>
                                <button className="btn btn-large" class="addcart">Add to Cart </button>
                            </div>
                        <div/>

                        <div class ="row justify-content-start">
                            <div class="col-md-4 box">
                                <h4>Product 10</h4>
                                <img src ={conversecrew}></img>
                                <p class ="prodtitle">Converse Crew Socks $4 </p>
                                <button className="btn btn-large" class="addcart">Add to Cart </button>
                            </div>

                            <div class="col-md-4 box">
                                <h4>Product 11</h4>
                                <img src ={converseankle}></img>
                                <p class ="prodtitle">Converse Quarter Socks $4 </p>
                                <button className="btn btn-large" class="addcart">Add to Cart </button>
                            </div>

                            <div class="col-md-4 box">
                                <h4>Product 12</h4>
                                <img src ={dunlopcrew}></img>
                                <p class ="prodtitle">Dunlop Crew Socks $2 </p>
                                <button className="btn btn-large" class="addcart">Add to Cart </button>
                            </div>
                        </div>
                 </div>
               </div>
            </div>
        
        );
    }

}
export default Stock;