import React, { useState } from "react"
import moment from 'moment'
import "./HappyThought.css"

export const HappyThought = ({message, hearts, date, id }) => {

  const handleSubmit = () => {
    fetch('https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like', {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
  })
}

	return (
		<section className="thought-container">
			<p>{message}</p>

      <div className="content-container">

			  <section className="icon-container">		

				  <button className="heart-button">
				  	❤️ 
				  </button>

          <div className="heart-like"> x {hearts}</div>

          </section>

          <div className="timestamp">{moment(date).fromNow()}</div>
        
				  
        </div>  	
		</section>
	);
};