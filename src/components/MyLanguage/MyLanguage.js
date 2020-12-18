import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MyLanguage.css";

class MyLanguage extends Component {
	static defaultProps = {
		language: {},
		words: [],
	};

	renderMyWords() {
		const { words } = this.props;
		return (
			<ul id="dash-list">
				{words.map((word) => (
					<li key={word.id}>
						<h4>{word.original}</h4>
						<div>
							<span id="count-span">Correct: {word.correct_count}</span>
							<span id="count-span">Incorrect: {word.incorrect_count}</span>
						</div>
					</li>
				))}
			</ul>
		);
	}

	render() {
		const { language } = this.props;
		return (
			<div id="dash-div">
				<header id="dash-header">
					<h2>
						{language.name}
						<span id="total-span">Total Correct: {language.total_score}</span>
					</h2>
					<button id="learn-btn">
						<Link to="/learn">Let's Learn Latin!</Link>
					</button>
				</header>
				<div id="dash-div-lvl-2">
					<h3>Here are some words to start learning...</h3>
					{this.renderMyWords()}
				</div>
			</div>
		);
	}
}

export default MyLanguage;
