import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  signIn() {
    const { email, password } = this.state;

    //Run Firebase Auth
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error: error.message});
        console.log('Error', error);
      });
  }

  render() {
    return(
      <div className="form">
        <h2>Sign In</h2>
        <div className="inner-form">
          <input
            className="email"
            type="email"
            placeholder="Email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            onChange={event => this.setState({password: event.target.value})}
          />
        </div>
        <button
          className="sign-up-btn"
          type="submit"
          onClick={() => this.signIn()}
        >
          Sign In
        </button>
        <div>{this.state.error}</div>
        <div><Link to={'/signup'}>Don't have an account? Click here to sign up</Link></div>
      </div>
    );
  }
}

export default SignIn;
