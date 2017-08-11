import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

	onEmailChange = (text) => {
		this.props.emailChanged(text);
	}

	onPasswordChange = (password) => {
		this.props.passwordChanged(password);
	}

	onButtonPress = () => {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

  render() {
    return (
      <Card>
      	<CardSection>
      		<Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange} value={this.props.email} />
      	</CardSection>

      	<CardSection>
      		<Input secureTextEntry label="Password" placeholder="password" onChangeText={this.onPasswordChange} value={this.props.password} />
      	</CardSection>      	

      	<CardSection>
      		<Button onPress={this.onButtonPress}>
      			Login
      		</Button>
      	</CardSection>      	      	
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
	const { email, password } = auth;
	return { email, password }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);


