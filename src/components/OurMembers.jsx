import React from "react";
import image1 from '../assets/image4.png'
import image2 from '../assets/image5.png'
import image3 from '../assets/image6.png'
export default function OurMembers (){
    const [dat,setDat]=React.useState([{
        image: image1,name: 'Brajest Pathak',text: "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been..."
    ,show: false},{
        image: image2,name: 'Deepak Shukla', text: "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall",extra:"experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications."
    ,show: false},{
        image: image3,name: 'Alok Kumar Singh',text: "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital...",extra: "Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",show: false}
    ])
    const readmore=(p)=>{
        setDat(prev =>{
            let x=[]
            for(let i=0;i<prev.length;i++){
                if(i===p){
                    x.push({...prev[i],show: !prev[i].show})
                }else{
                    x.push(prev[i])
                }
            }
            return x
        })
    }
    const datamem=dat.map(x=>{
        return (
            <div key={dat.indexOf(x)}className="details">
        <img src={x.image} className="imgs1"></img>
        <h3>{x.name}</h3>
        {x.show?<p>{x.text + " "+x.extra}</p>:<p>{x.text}</p>}
        <button className="button2" onClick={()=>readmore(dat.indexOf(x))}>{x.show?"show less":"Readmore"}</button>
        </div>
        )
    })
    return (
        <div id='ourmembers'>
            <h2>Our Members</h2>
            <div>{datamem}</div>
        </div>
    )
}