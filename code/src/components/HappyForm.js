import React, { useState } from "react"
import "./HappyForm.css"

export const HappyForm = (props) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
      fetch('https://technigo-thoughts.herokuapp.com/', {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
    })
  }

	return (
		<section className="send-Happy-form">
			<p>What is your mood today?</p>
			<form>
				<textarea
          placeholder="Write something"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      
        <input onClick={handleSubmit} className="two-hearts-button" type="button" value="❤️ Just love ❤️"  />
        

			</form>
		</section>
);
};