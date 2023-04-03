import React from "react";
import image1 from '../assets/Group 4906.png'
import image2 from '../assets/Vector.png'
export default function Topbar(props){
    const {state,setState}=props
    return(
        <header>
            <nav className="topbar">
                <div className="logo">
                    <img src={image1}></img>
                    <img src={image2}></img>
                </div>
                <div className="part2">
                    <div>
                     <ul className="topbar-links">
                        <li className="topbar-link" >
                            <a className={(state==='home')?"active":""} href='#home' onClick={()=>setState('home')}>Home</a>
                        </li>
                        <li className="topbar-link" >
                            <a href="#offerings" className={(state==='ourofferings')?" active":""}  onClick={()=>setState('ourofferings')}>Our offerings</a>
                        </li>
                        <li className="topbar-link">
                            <a className={(state==='ourmembers')?" active":""} href='#ourmembers' onClick={()=>setState('ourmembers')}>Our Team</a>
                        </li>
                        <li className="topbar-link">
                            <a className={(state==='contactus')?" active":""} href='#contactus' onClick={()=>setState('contactus')}>Contact Us</a>
                        </li>
                        <li className="topbar-link">
                            <a className={(state==='blogs')?" active":""} href='#blogs' onClick={()=>setState('blogs')}>Blogs</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <button className="button1">Register</button>
                </div>
            </nav>
        </header>
    )
}