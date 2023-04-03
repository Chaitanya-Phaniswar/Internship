import React from "react";
import image3 from '../assets/Rectangle 5533.png'
import image4 from '../assets/image 27 (1).png'
export default function Home(){
    return(
        <div id='home'>
            <div className="home-div1">
                <div className="div1-text">
                    Making your <span className="highlight">real estate</span> purchase journey faster and transparent
                </div>
                <div>
                    <img className="imgs" src={image3}></img>
                </div>
            </div>
            <div className="home-div2">
                <div>
                <img className="imgs" src={image4}></img>
                </div>
                <div className="div2-text">
                    <h3>Who We Are</h3>
                    <p>
                    The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.
                    </p>
                    <button className="button2">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}