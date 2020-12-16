import React, { Component } from "react";
import LearnContext from "../../contexts/LearnContext";
import "./ShowScore.css";

class ShowScore extends Component {
	static contextType = LearnContext;

	render() {
		const { totalScore } = this.context;
		return (
			<div className="ShowScore">
				<p>
					Your total score is:{" "}
					<span className="show-score-span">{totalScore}</span>
				</p>
			</div>
		);
	}
}

export default ShowScore;
