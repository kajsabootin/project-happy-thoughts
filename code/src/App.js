import React, { useEffect, useState } from "react"
import { HappyThought } from "./components/HappyThought"
import { HappyForm } from "./components/HappyForm"
//import { HappyHeart } from "./components/HappyHeart"

const url = "https://technigo-thoughts.herokuapp.com/"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  return (

    <React.Fragment>
      <HappyForm onFormSubmit={onFormSubmit}/>

      <section className="Happy-Thought">
			{thoughts.map((thought) => (
				<HappyThought
					message={thought.message}
					hearts={thought.hearts}
          date={thought.createdAt}
          id={thought._id}
				/>
			))}
		</section> 
    </React.Fragment>
	);
};
