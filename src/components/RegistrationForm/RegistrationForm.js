import React, { Component } from "react";
import { Input, Required, Label } from "../Form/Form";
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../contexts/UserContext";
import Button from "../Button/Button";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {},
	};

	static contextType = UserContext;

	state = { error: null };

	firstInput = React.createRef();

	handleSubmit = async (ev) => {
		ev.preventDefault();
		const { name, username, password } = ev.target;
		
		try {
			await AuthApiService.postUser({
			name: name.value,
			username: username.value,
			password: password.value,
		});
		const { authToken } = await AuthApiService.postLogin({
		  username: username.value,
		  password: password.value
		});
  
		name.value = '';
		username.value = '';
		password.value = '';
  
		this.context.processLogin(authToken);
		return this.history.push('/');
	  } catch ({ error }) {
		return this.setState({ error });
	  }
	};

	componentDidMount() {
		this.firstInput.current.focus();
	}

	render() {
		const { error } = this.state;
		return (
			<form id="reg-form" onSubmit={this.handleSubmit}>
				<div id="alert" role="alert">
					{error && <p>{error}</p>}
				</div>
				<div>
					<Label htmlFor="registration-name-input">
						Enter your name
						<Required />
					</Label>
					<Input
						ref={this.firstInput}
						id="registration-name-input"
						name="name"
						required
					/>
				</div>
				<div>
					<Label htmlFor="registration-username-input">
						Choose a username
						<Required />
					</Label>
					<Input id="registration-username-input" name="username" required />
				</div>
				<div>
					<Label htmlFor="registration-password-input">
						Choose a password
						<Required />
					</Label>
					<Input
						id="registration-password-input"
						name="password"
						type="password"
						required
					/>
					<Button type="submit">Sign up</Button>{" "}
				</div>
			</form>
		);
	}
}

export default RegistrationForm;
