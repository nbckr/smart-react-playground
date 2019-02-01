import React, { Component } from 'react'
import { SmartSearch, ResourceList } from 'fhir-smartr' // FhirSmartr.SmartSearch and FhirSmartr.ResourceList in browser
import PatientResource from './PatientResource';
import AppointmentResource from './AppointmentResource';

class App extends Component {
  render() {
    return (
      // SmartSearch allows you to define a query
      // The results of that query are then passed to its children as props.results
      <SmartSearch query={{ type: 'Appointment' }}>
        <ResourceList>
          <AppointmentResource />
        </ResourceList>
      </SmartSearch>
    )
  }
}

export default App;
