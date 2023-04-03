import React from "react";
import Select from "react-select"
import image2 from '../assets/image1.png'
export default function Form(){
    const [data,setData] = React.useState({fullname: "",email: "",phone: "",country: "",stage: ""})
    const handleChange =(e)=>{
        const {name , value} = e.target
        console.log(name,value)
        setData(prev => ({...prev, [name]: value}))
    }
    const options = [
        { value: 'I have booked and registration not done', label: 'I have booked and registration not done' },
        { value: 'waiting for registration completion', label: 'waiting for registration completion' },
        { value: 'Need to book', label: 'Need to book' }
      ]
    return (
        <div id='contactus'>
            <form>
            <h3>Get in touch with us to connect</h3>
            <p>Contact us</p>
            <div className="form">
            <div>
                <fieldset>
                    <legend>fullname</legend>
                    <input type="text" name="fullname" value={data.fullname} onChange={handleChange} required></input>
                </fieldset>
            </div>
            <div>
            <fieldset>
                <legend>email</legend>
                    <input type="email" name="email" value={data.email} onChange={handleChange} required></input>
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <legend>phone</legend>
                    <input type="text" name="phone" value={data.phone} onChange={handleChange} required></input>
                </fieldset>
            </div>
            <div>
            <fieldset>
                    <legend>country</legend>
                    <input type="text" name="country" value={data.country} onChange={handleChange} required></input>
                </fieldset>
            </div>
            <div>
            <fieldset>
                    <legend>stage</legend>
                    <Select options={options} name='stage'/>
                </fieldset>
            </div>
            </div>
            <button>Submit</button>
            </form>
            <img src={image2}></img>
        </div>
    )
}