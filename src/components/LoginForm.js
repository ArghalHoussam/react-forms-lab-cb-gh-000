import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <form onSubmit={ event => this.handleFormSubmition(event) }>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={ this.state.username}
              onChange={ event => this.handleInputChange(event) }
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={ this.state.password }
              onChange={ event => this.handleInputChange }
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
