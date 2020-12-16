import React, { Component } from "react";
import LearnContext from "../../contexts/LearnContext";
import "./ShowCounts.css";

class ShowCounts extends Component {
	static contextType = LearnContext;

	render() {
		const { wordCorrectCount, wordIncorrectCount } = this.context;
		return (
			<div className="DisplayCounts">
				<p className="correct">
					You have answered this word correctly <span>{wordCorrectCount}</span>{" "}
					times.
				</p>
				<p className="incorrect">
					You have answered this word incorrectly{" "}
					<span>{wordIncorrectCount}</span> times.
				</p>
			</div>
		);
	}
}

export default ShowCounts;
