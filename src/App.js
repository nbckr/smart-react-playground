import React, { Component } from 'react'
import { SmartSearch, ResourceList } from 'fhir-smartr' // FhirSmartr.SmartSearch and FhirSmartr.ResourceList in browser
import PatientResource from './PatientResource';
import AppointmentResource from './AppointmentResource';

class App extends Component {
  render() {
    return (
      // SmartSearch allows you to define a query
      // The results of that query are then passed to its children as props.results

      // Now just queries appointments for one patient (Shelby)
      
      <div>

      <SmartSearch query={{ type: 'Appointment', query: { 'actor': 'Patient/d0d0cde0-4b21-42f6-9c1e-bfa447d72059' }}}>
        <ResourceList>
          <AppointmentResource />
        </ResourceList>
      </SmartSearch>
      </div>
    )
  }
}

export default App;
