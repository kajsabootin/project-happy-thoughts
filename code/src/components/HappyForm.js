import React from 'react';

export const HappyForm = () => {

  /*const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message) // this onFormSubmit comes as a props from App.js
    setMessage("")
    };*/


	return (
		<section className="send-Happy-formr">
			<p>What is your mood today?</p>
			<form>
				<textarea
					//className="thought-input"
					name="thought"
					type="text"
					placeholder="Write something"
				/>
				<input className="two-hearts-button" type="button" value="❤️ Send love ❤️" />
			</form>
		</section>
	);
};