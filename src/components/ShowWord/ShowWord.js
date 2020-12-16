import React, { Component } from "react";
import LearnContext from "../../contexts/LearnContext";
import "./ShowWord.css";

class ShowWord extends Component {
	static contextType = LearnContext;

	render() {
		const { nextWord } = this.context;
		return (
			<div className="show-word-div">
				<h2>Translate the word:</h2>
				<span className="show-word-span">{nextWord}</span>
			</div>
		);
	}
}

export default ShowWord;
