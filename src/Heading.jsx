import React from "react";

function Card(props){
    return(
    <div className="cards">
    <div className="card">
        <img src={props.imgsrc} alt="cant display" className="imgCategory"/>
        <div className="cardInfo">
            <span className="cardCategory">{props.title}</span>
            <h3 className="webseriesName">{props.sname}</h3>
            <br></br>
            <a href={props.link}><button>Watch Now</button></a>
        </div>

    </div>
</div>)
}
export default Card;