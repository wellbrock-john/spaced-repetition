import React, { Component } from "react";
import LanguageService from "../../services/language-service";
import TokenService from "../../services/token-service";
import LearnContext from "../../contexts/LearnContext";
import LearnWordForm from "../../components/LearnWordForm/LearnWordForm";
import ShowWord from "../../components/ShowWord/ShowWord";
import ShowFeedback from "../../components/ShowFeedback/ShowFeedback";
import ShowScore from "../../components/ShowScore/ShowScore";
import ShowCounts from "../../components/ShowCounts/ShowCounts";
import "./LearnRoute.css";

class LearnRoute extends Component {
	static contextType = LearnContext;

	componentDidMount() {
		this.context.reset();

		LanguageService.getHead()
			.then((head) => {
				this.context.setTotalScore(head.totalScore);
				this.context.setCorrectCount(head.wordCorrectCount);
				this.context.setIncorrectCount(head.wordIncorrectCount);
				this.context.setNextWord(head.nextWord);
			})
			.catch((error) => {
				if (error.error === "Unauthorized request") {
					TokenService.clearAuthToken();
					this.props.history.push("/login");
				}
				this.context.setError(error);
			});
	}

	renderForm() {
		return (
			<>
				<ShowWord />
				<LearnWordForm />
			</>
		);
	}

	renderFeedback() {
		return <ShowFeedback />;
	}

	render() {
		const showForm = this.context.isCorrect == null;
		return (
			<div id="learn-route">
				<ShowScore />
				{showForm && this.renderForm()}
				{!showForm && this.renderFeedback()}
				{showForm && (
					<footer>
						<ShowCounts />
					</footer>
				)}
			</div>
		);
	}
}

export default LearnRoute;
