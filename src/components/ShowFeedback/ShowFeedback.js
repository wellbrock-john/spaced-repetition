import React, { Component } from "react";
import cx from "classnames";
import LearnContext from "../../contexts/LearnContext";
import Button from "../Button/Button";
import "./ShowFeedback.css";

class ShowFeedback extends Component {
	static contextType = LearnContext;

	nextButton = React.createRef();

	goToNextWord = () => {
		this.context.setIsCorrect(null);
	};

	componentDidMount() {
		this.nextButton.current.focus();
	}

	render() {
		const { isCorrect, prevWord, answer, guess } = this.context;
		return (
			<div
				className={cx("ShowFeedback", {
					ShowFeedback_correct: isCorrect,
					ShowFeedback__false: !isCorrect,
				})}
			>
				{isCorrect ? (
					<h2 className="feedback-correct">You were correct! :D</h2>
				) : (
					<h2 className="feedback-incorrect">
						Good try, but not quite right :(
					</h2>
				)}
				<p>
					The correct translation for{" "}
					<span className="feedback-prev-word">{prevWord}</span> was{" "}
					<span className="feedback-answer">{answer}</span> <br />
					and you chose <span className="feedback-guess">{guess}</span>!
				</p>
				<Button
					ref={this.nextButton}
					className="ShowFeedback__next-word-button"
					onClick={this.goToNextWord}
				>
					Try another word!
				</Button>
			</div>
		);
	}
}

export default ShowFeedback;
