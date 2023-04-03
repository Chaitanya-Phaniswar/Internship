import React from "react";
export default function Blogs(){
    const [blogs,setBlogs]=React.useState([{img: "https://picsum.photos/200"},{img: "https://picsum.photos/300"},{img: "https://picsum.photos/400"}
])
const dos=()=>{
    setBlogs([{img: `https://picsum.photos/${Math.floor((Math.random() * 300) + 1)}`},{img: `https://picsum.photos/${Math.floor((Math.random() * 400) + 1)}`},{img: `https://picsum.photos/${Math.floor((Math.random() * 600) + 1)}`}
])
}
    const blogElements=blogs.map(x=>{
        return(
            <div key={blogs.indexOf(x)}className="detais">
        <img className="img3" src={x.img}></img>
        <p className="head">Real Estate, Analysis</p>
        <div className="spl"><p>4 April 2023</p><p>By Admin</p></div>
        <h4>Guiding personals for Buying</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae illum molestias tempore ipsa sint commodi totam tempora in ea est vero distinctio molestiae explicabo, eaque vel dolore fugit corrupti.</p>
        <h4>View more ...</h4>
        </div>
        )
    })
    return (
        <div id='blogs'>
            <h2>Blogs</h2>
            <div className="Details">
                <p className="imp" onClick={dos}>{"<"}</p>
                    {blogElements}
                <p className="imp" onClick={dos}>{">"}</p>
            </div>
        </div>
    )
}