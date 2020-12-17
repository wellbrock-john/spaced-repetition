import React, { Component } from "react";
import LanguageService from "../../services/language-service";
import LearnContext from "../../contexts/LearnContext";
import { Input, Label } from "../Form/Form";
import Button from "../Button/Button";
import "./LearnWordForm.css";

class LearnWordForm extends Component {
	static contextType = LearnContext;

	state = { error: null };

	firstInput = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		const { guess } = e.target;

		this.context.setGuess(guess.value);

		LanguageService.postGuess(guess.value)
			.then((head) => {
				this.context.setPrevWord(this.context.nextWord);
				this.context.setTotalScore(head.totalScore);
				this.context.setCorrectCount(head.wordCorrectCount);
				this.context.setIncorrectCount(head.wordIncorrectCount);
				this.context.setNextWord(head.nextWord);
				this.context.setIsCorrect(head.isCorrect);
				this.context.setAnswer(head.answer);
				guess.value = "";
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};

	componentDidMount() {
		this.firstInput.current.focus();
	}

	render() {
		const { error } = this.state;
		return (
			<form className="learn-word-form" onSubmit={this.handleSubmit}>
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="learn-word-form-guess-input">
					<Label htmlFor="learn-guess-input">
						What's the translation for this word?
					</Label>
					<Input
						ref={this.firstInput}
						id="learn-guess-input"
						name="guess"
						required
						placeholder=". . ."
					/>
				</div>
				<Button className="submit-guess-btn" type="submit">
					Submit your answer
				</Button>
			</form>
		);
	}
}

export default LearnWordForm;
