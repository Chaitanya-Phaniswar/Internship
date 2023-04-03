import React from "react";
import image3 from '../assets/image9.png'
import image2 from '../assets/phone.png'
import image1 from '../assets/mail.png'
export default function Footer(props){
    const {state,setState}=props
    return(
        <footer>
            <div className="help">
                <img className="img5" src={image3}></img>
                <div className="grids">
                    <div className="news">
                        <h3>Company</h3>
                        <p><a href="#home" onClick={()=>setState('home')}>Home</a></p>
                        <p><a href="#offerings" onClick={()=>setState('ourofferings')}>Our offerings</a></p>
                        <p><a href="#ourmembers" onClick={()=>setState('ourmembers')}>Our Team</a></p>
                        <p><a href="#contactus" onClick={()=>setState('contactus')}>Contact Us</a></p>
                    </div>
                    <div>
                        <div className="news">
                            <h3>Usefull Links</h3>
                            <p><a href="#blogs" onClick={()=>setState('blogs')}>Blogs</a></p>
                            <p><a>FAQs</a></p>
                        </div>
                    </div>
                    <div>
                    <div className="news">
                        <div>
                        <h3><img className="img4" src={image1}></img>
                        Email : </h3>
                        <p><a href="abe.@email.com">aerodynamic.@email.com</a></p>
                        </div>
                        <div>
                        <h3><img className="img4" src={image2}></img>
                        Phone</h3>
                        <p><a href="abe.@email.com">+91 9876543210</a></p>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="finalfoot">
            <p>@ Copyrights 2023</p>
            <div className="links">
            <div className="links">
            <img className="img4" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/freecodecamp-1024.png"></img>
            <span>Instagram</span>
            </div>
            <div className="links"><img className="img4" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-128.png"></img><span>LinkedIn</span></div>
            <div className="links"><img className="img4" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-128.png"></img><span>Github</span></div></div>
            </div>
            </div>
        </footer>
    )
}