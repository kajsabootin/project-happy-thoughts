import React, { useState } from "react"

export const HappyHeart = () => {

    const handleSubmit = () => {
    event.preventDefault()
      fetch('https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like', {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
    })
  }

  return (
    );
};