import React, { useState } from "react"
import moment from 'moment'

export const HappyHeart = ({ id, hearts, date}) => {
  const [likes, setLikes] = useState(hearts)

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" }
      }).then(() => {
        setLikes(likes + 1)
      })
    }

return (

  <div className="content-container">

    <section 
      
      className="icon-container">

      <button 
      
        className="heart-button"
        onClick={handleClick} >
          <span>❤️ </span>
		  </button>


      <div 
      
        className="heart-like"> 
          <span> x {likes}</span>

      </div>

    </section>

      <div 
        
        className="timestamp">
          <span> {moment(date).fromNow()}</span> 
      
      </div>

    
  </div>  
  
);
}  
