import React, { useState } from "react"


export const HappyHeart = (message, hearts, date, id) => {

    const handleSubmit = () => {
      fetch('https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like', {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
    })
  }

  return (

    <button
      onClick={handleSubmit}>
      <span role='img' aria-label='Heart' >
        {" ❤️ "}
        </span>
    </button>
    );
};