import React, { useEffect, useState } from "react"
import { HappyThought } from "./components/HappyThought"
import { HappyForm } from "./components/HappyForm"

const url = "https://technigo-thoughts.herokuapp.com/"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      Find me in src/app.js jag då?!
    </div>
  )
}
