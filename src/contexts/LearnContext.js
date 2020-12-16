import React, { Component } from "react";

const startingState = {
	totalScore: 0,
	wordCorrectCount: 0,
	wordIncorrectCount: 0,
	nextWord: null,
	guess: null,
	prevWord: null,
	isCorrect: null,
	answer: null,
	error: null,
};

const LearnContext = React.createContext({
	...startingState,
	setError: () => {},
	clearError: () => {},
	setNextWord: () => {},
	setTotalScore: () => {},
	setCorrectCount: () => {},
	setIncorrectCount: () => {},
	setGuess: () => {},
	setAnswer: () => {},
	setIsCorrect: () => {},
	reset: () => {},
});

export default LearnContext;

export class LearnProvider extends Component {
	state = {
		...startingState,
	};

	setError = (error) => {
		console.error(error);
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setTotalScore = (totalScore) => {
		this.setState({ totalScore });
	};

	setCorrectCount = (wordCorrectCount) => {
		this.setState({ wordCorrectCount });
	};

	setIncorrectCount = (wordIncorrectCount) => {
		this.setState({ wordIncorrectCount });
	};

	setNextWord = (nextWord) => {
		this.setState({ nextWord });
	};

	setGuess = (guess) => {
		this.setState({ guess });
	};

	setPrevWord = (prevWord) => {
		this.setState({ prevWord });
	};

	setIsCorrect = (isCorrect) => {
		this.setState({ isCorrect });
	};

	setAnswer = (answer) => {
		this.setState({ answer });
	};

	reset = () => {
		this.setState({
			...startingState,
		});
	};

	render() {
		const value = {
			// values
			totalScore: this.state.totalScore,
			wordCorrectCount: this.state.wordCorrectCount,
			wordIncorrectCount: this.state.wordIncorrectCount,
			nextWord: this.state.nextWord,
			guess: this.state.guess,
			prevWord: this.state.prevWord,
			isCorrect: this.state.isCorrect,
			answer: this.state.answer,
			error: this.state.error,
			// methods
			setError: this.setError,
			clearError: this.clearError,
			setTotalScore: this.setTotalScore,
			setCorrectCount: this.setCorrectCount,
			setIncorrectCount: this.setIncorrectCount,
			setNextWord: this.setNextWord,
			setGuess: this.setGuess,
			setPrevWord: this.setPrevWord,
			setIsCorrect: this.setIsCorrect,
			setAnswer: this.setAnswer,
			reset: this.reset,
		};
		return (
			<LearnContext.Provider value={value}>
				{this.props.children}
			</LearnContext.Provider>
		);
	}
}
