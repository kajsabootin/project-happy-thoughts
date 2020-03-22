import React, { useState } from "react"


export const HappyHeart = ({ id }) => {

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" }
    })
}  

return (

    <button className="heart-button"
    onClick={handleClick} >
          ❤️ 
		</button>
  
);
}  
