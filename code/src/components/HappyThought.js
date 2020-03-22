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
			<div className="icon-container">
				<div>
					<button className="heart-button"
          
          
          >
						<div className="icon-heart" /*role="img"*/ aria-label="icon-heart">
            ❤️ x {hearts} {date}
						</div>
					</button>
        
				</div>

        <div className="timestamp">
        {moment(date).fromNow()}</div>
				
			</div>
		</section>
	);
};