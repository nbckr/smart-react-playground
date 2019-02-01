import React, { Component } from 'react' // var Component = React.Component; in browser

class PatientResource extends Component {
  
  render() {
    // FHIR resources will be passed in as props.resource
    const patient = this.props.resource;
    const name = patient.name[0];
    const address = patient.address[0];
    return(
      <div>
        <h2>{ name.given[0] + ' ' + name.family }</h2>
        <div>{ address.line[0] }</div>
      </div>
    )
  }
  
}

export default PatientResource;