import React from "react";
import image5 from '../assets/image1.png'
import image6 from '../assets/image2.png'
import image7 from '../assets/image3.png'
export default function Offerings(){
    const det=["Pre-Booking","Post-Booking & Pre-Registration","Post-Registration"]
    const detElement=det.map(x=>{
        return (
            <div key={det.indexOf(x)} className="dets">
                <p className="detspan">{det.indexOf(x)+1}</p>
                <p>
                    {x}
                </p>
            </div>
        )
    })
    const random=[{image: image5,head: "Background verification" ,text: "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..."},
    {image: image6,head: 'Virtual site visit',text: "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."},
                    ,{image: image7,head: 'The delligence', text: "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."}]
    const elements=random.map(x=>{
        return(
            <div key={random.indexOf(x)}className="details">
        <img src={x.image} className="imgs"></img>
        <h3>{x.head}</h3>
        <p>{x.text}</p>
        <button className="button2">Contact us</button>
        </div>
        )
    })
    return(
        <div id="offerings">
            <div className="offering1">
                <h2>Our Offerings</h2>
                <p>This whole purchase journey can be divided into three stages.For more details, Click Here</p>
                <div className="purchasedet">
                    {detElement}
                </div>
            </div>
            <div className='Details'>
                {elements}
            </div>
        </div>
    )
}