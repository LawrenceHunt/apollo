import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`

class ResolutionForm extends React.Component {

  submitForm() {
    this.props.createResolution({
      variables: {
        name: this.name.value
      }
    }).catch(({error}) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="form">
        <input ref={(input) => this.name = input} type="text" className="text" placeholder="Resolution..."/>
        <button onClick={this.submitForm.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm)
