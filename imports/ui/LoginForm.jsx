import React from 'react'
import {Accounts} from 'meteor/accounts-base'
import {withApollo} from 'react-apollo'

export default class LoginForm extends React.Component {

  login(e) {
    e.preventDefault()
    Meteor.loginWithPassword(this.email.value, this.password.value, (error) => {
      if (!error) this.props.client.resetStore()
      console.log(error)
    })
  }

  render() {
    return (
      <form onSubmit={this.login.bind(this)}>
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
      <button type="submit">Log In</button>
      </form>
    )
  }
}
