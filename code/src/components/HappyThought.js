import React, { useState } from "react"
import moment from 'moment'
import "./HappyThought.css"
import { HappyHeart } from "./HappyHeart"

export const HappyThought = ({message, hearts, date, id }) => {

	return (
		<section className="thought-container">
			<p>{message}</p>

      <div className="content-container">

			  <section className="icon-container">
          		

        <HappyHeart
              id={id}
          />

          <div className="heart-like"> x {hearts}</div>

          </section>

          <div className="timestamp">{moment(date).fromNow()}</div>
				  
        </div>  	
		</section>
	);
};