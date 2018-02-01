import React from 'react'
import {Accounts} from 'meteor/accounts-base'

export default class RegisterForm extends React.Component {

  registerUser(e) {
    e.preventDefault()
    Accounts.createUser({
      email: this.email.value,
      password: this.password.value
    }, (error) => {
      if (!error) this.props.client.resetStore()
      console.log(error)
    })
  }

  render() {
    return (
      <form onSubmit={this.registerUser.bind(this)}>
        <input
          ref={(input) => this.email = input}
          type="email"
          className="text"
          placeholder="Email"
        />
        <input
          ref={(input) => this.password = input}
          type="password"
          className="text"
          placeholder="Password"
        />
      <button type="submit">Register</button>
      </form>
    )
  }
}
