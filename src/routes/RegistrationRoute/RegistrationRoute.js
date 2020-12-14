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
		history.push("/login");
	};

	render() {
		return (
			<section id="reg-route-sec">
				<p id="reg-route-p">
					Practice learning a language with the spaced repetition revision
					technique.
				</p>
				<h2 id="reg-route-h2">Sign Up Form</h2>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess}
				/>
				<footer id="reg-footer">
					<Link to="/login">Already have an account?</Link>
				</footer>
			</section>
		);
	}
}

export default RegistrationRoute;
