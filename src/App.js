/* global FHIR */

import React, {Component} from 'react'
import {SmartSearch, ResourceList} from 'fhir-smartr' // FhirSmartr.SmartSearch and FhirSmartr.ResourceList in browser
import PatientResource from './PatientResource';
import AppointmentResource from './AppointmentResource';
import "fhirclient/fhir-client";

class App extends Component {
    render() {

        FHIR.oauth2.ready(smart => {
            smart.patient.read().then(result => console.log("Read result: ", result));
            console.log("Patient id:" + smart.patient.id);
            // now do something cool
        });


        return (
            // SmartSearch allows you to define a query
            // The results of that query are then passed to its children as props.results

            // Now just queries appointments for one patient (Shelby)

            <div>
                <SmartSearch
                    query={{type: 'Appointment', query: {'actor': 'Patient/d0d0cde0-4b21-42f6-9c1e-bfa447d72059'}}}>
                    <ResourceList>
                        <AppointmentResource/>
                    </ResourceList>
                </SmartSearch>
            </div>
        )
    }
}

export default App;
