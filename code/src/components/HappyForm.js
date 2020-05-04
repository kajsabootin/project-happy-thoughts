import React, { useState } from "react";
import "./Form.css";

export const Form = (props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setMessage("");
      props.onFormSubmit(message);
    });
  };

  return (
    <section className="send-Happy-form">
      <p>What's making you happy right now?</p>

      <form>
        <textarea
          className="form-message"
          placeholder="........."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <input
          className="two-hearts-button"
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140 ? true : false}
          type="button"
          value="❤️ Send Happy Thoughts! ❤️"
        />
      </form>
    </section>
  );
};
