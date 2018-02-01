import React from 'react'
import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import App from '../../ui/App.jsx'
import {ApolloClient} from 'apollo-client'
import {ApolloLink, from} from 'apollo-link'
import {ApolloProvider} from 'react-apollo'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
})

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken()
  operation.setContext(() => ({
    headers: {
      'meteor-login-token': token
    }
  }))
  return forward(operation)
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
})

const ApolloApp = () => {
  return (
    <ApolloProvider
      client = {client}
    >
      <App />
    </ApolloProvider>
  )
}

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'))
})
