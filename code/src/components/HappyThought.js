import React from "react";
import "./HappyThought.css";
import { HappyHeart } from "./HappyHeart";

export const HappyThought = ({ message, id, createdAt, hearts }) => {
  return (
    <section className="thought-container">
      <p>{message}</p>

      <HappyHeart id={id} createdAt={createdAt} hearts={hearts} />
    </section>
  );
};
