/* global FHIR */

import React, {Component} from 'react';
import "fhirclient/fhir-client";
import {ResourceList, SmartSearch} from "fhir-smartr";
import AppointmentResource from "./AppointmentResource";

class SmartQueryTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: null,
      patient: null
    }
  }

  render() {
    return (
      <div>

        <h2>Infos from FHIR.oauth2.ready callback</h2>
        <p><b>Patient id:</b> {this.state.patientId}</p>
        <p><b>Patient infos:</b> <small>{JSON.stringify(this.state.patient)}</small></p>

        <h2>Appointments queried subsequently for this patient</h2>
        <div>
          {
            this.state.patientId
              ? this.retrieveAppointmentsForPatient(this.state.patientId)
              : "No appointments for this patient."
          }
        </div>
      </div>
    );
  }

  componentWillMount() {
    FHIR.oauth2.ready(smart => {
      // patient id is immediately available
      this.setState({patientId: smart.patient.id});

      // more info in callback
      smart.patient.read().then(patientInfo => this.setState({patient: patientInfo}));
    });

  }

  retrieveAppointmentsForPatient(patientId) {
    return (
      <div>
        <SmartSearch
          query={{type: 'Appointment', query: {'actor': patientId }}}>
          <ResourceList>
            <AppointmentResource/>
          </ResourceList>
        </SmartSearch>
      </div>
    )
  }
}


export default SmartQueryTest;