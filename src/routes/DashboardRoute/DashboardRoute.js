import React, { Component } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import LanguageService from "../../services/language-service";
import TokenService from "../../services/token-service";
import MyLanguage from "../../components/MyLanguage/MyLanguage";
import "./DashboardRoute.css";

class DashboardRoute extends Component {
	static contextType = LanguageContext;

	componentDidMount() {
		LanguageService.getLanguage()
			.then((res) => {
				this.context.setLanguage(res.language);
				this.context.setWords(res.words);
			})
			.catch((err) => {
				if (err.error === "Unauthorized request") {
					TokenService.clearAuthToken();
					this.props.history.push("/login");
				}
				this.context.setError(err);
			});
	}

	render() {
		const { language, words } = this.context;
		console.log(words);
		return (
			<section id="dash-sec">
				<hr id="rounded" />
				<MyLanguage language={language} words={words} />
			</section>
		);
	}
}

export default DashboardRoute;
