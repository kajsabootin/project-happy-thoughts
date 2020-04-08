import React, { useEffect, useState } from "react"
import { HappyThought } from "./components/HappyThought"
import { Form } from "./components/HappyForm"

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
      
      <Form onFormSubmit={onFormSubmit}/>

      <section 
        
        className="Happy-Thought">
			  {thoughts.map((thought) => (
				  <HappyThought
<<<<<<< HEAD
            key={thought._id}
					  message={thought.message}
					  hearts={thought.hearts}
            date={thought.createdAt}
=======
	  				key={thought._id}
					 message={thought.message}
					 hearts={thought.hearts}
             date={thought.createdAt}
>>>>>>> 48ca4fa0e686f4eac2d139c33f0b6cf652c1ac0e
            id={thought._id}
				  />

			))}
		  </section> 

    </React.Fragment>
	);
};
