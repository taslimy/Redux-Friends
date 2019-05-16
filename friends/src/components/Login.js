import React, { Component } from "react";
import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { login } from "../actions/";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>
            {this.props.loggedIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
