import React, { useState } from "react"
import "./HappyThought.css"

export const HappyThought = ({message, hearts, date, id }) => {
	return (
		<section className="thought-container">
			<p>{message}</p>
			<div className="icon-container">
				<div>
					<button className="heart-button">
						<div className="heart" /*role="img"*/ aria-label="heart">
            ❤️
						</div>
					</button>
					<span className="all-hearts"> {hearts}  </span>

          <div className="icon-date" > {date} </div>

        
				</div>
				
			</div>
		</section>
	);
};