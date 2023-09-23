import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <figure>
                <img src= {props.img} alt={props.restaurant} />
            </figure>
            <h2>{props.restaurant}</h2>
            <p>{props.address}</p>
            <a href="https://www.delwoodcincy.com/" target="_blank">
                <button>Menu</button>
            </a>
        </div>
    )
}

export default Card;