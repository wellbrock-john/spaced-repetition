import React, { Component } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationRoute.css";

class RegistrationRoute extends Component {
	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	handleRegistrationSuccess = () => {
		const { history } = this.props;
		history.push("/");
	};

	render() {
		return (
			<section id="reg-route-sec">
				<hr id="rounded-top" />
				<p id="reg-route-p">
					Practice learning a language with the spaced repetition revision
					technique.
				</p>
				<hr id="rounded-bot" />
				<h2 id="reg-route-h2">Sign Up Form</h2>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess}
				/>
				<footer id="reg-footer">
					<Link to="/login">
						<strong>Already have an account?</strong>
					</Link>
				</footer>
			</section>
		);
	}
}

export default RegistrationRoute;
