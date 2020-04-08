import React from "react"
import "./HappyThought.css"
import { HappyHeart } from "./HappyHeart"

export const HappyThought = ({message, id, date, hearts}) => {

	return (
		
    <section 
      
      className="thought-container">
			  <p>{message}</p>


      <HappyHeart
          id={id}
          date={date}
          hearts={hearts}
          
      />
		</section>
	);
};