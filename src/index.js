import React from "react";
import reactDom from "react-dom";
import Card from "./Heading";
import "./index.css";
import sdata from './sdata';

const ncard = (val) => {
    return(<Card 
        imgsrc={val.imgsrc}
        sname = {val.sname}
        title = {val.title}
        link={val.link}
        />);
}


reactDom.render(
<>
{/* <h2>These are top 5 netflix series</h2><br></br> */}
{sdata.map(ncard)}
</>,
document.getElementById("root")
)