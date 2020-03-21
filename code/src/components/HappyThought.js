import React, { useState } from "react"
import "./HappyThought.css"

export const HappyThought = ({message, hearts, date, id }) => {
	return (
		<section className="thought-container">
			<p>{message}</p>
			<div className="icon-container">
				<div>
					<button className="heart-button">
						<div className="icon-heart" /*role="img"*/ aria-label="icon-heart">
            ❤️ x {hearts} {date}
						</div>
					</button>
				
        
				</div>
				
			</div>
		</section>
	);
};