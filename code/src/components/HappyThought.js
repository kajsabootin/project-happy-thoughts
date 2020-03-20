import React, { useState } from "react"

export const HappyThought = ({message, hearts, date, id }) => {
	return (
		<section className="thought-container">
			<h3>{message}</h3>
			<div className="icon-container">
				<div>
					<button className="heart-button">
						<div className="heart" role="img" aria-label="heart">
            ❤️
						</div>
					</button>
					<span className="all-hearts">x {hearts} and {id} </span>
				</div>
				
			</div>
		</section>
	);
};