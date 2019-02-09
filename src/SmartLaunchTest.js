/*global FHIR */

import React, {Component} from 'react';
import 'fhirclient/fhir-client';

class SmartLaunchTest extends Component {
  render() {
    return (
      <div>
        <input type="button" onClick={this.handleLaunchClick} value="Go to EHR authorization endpoint" />
      </div>
    );
  }

  handleLaunchClick() {
    FHIR.oauth2.authorize({
      "client": {
        "client_id": "my_web_app",
        "scope":  "patient/*.read launch/patient launch/todo openid fhirUser"
      },
      //"server": "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImIiOiJkMGQwY2RlMC00YjIxLTQyZjYtOWMxZS1iZmE0NDdkNzIwNTkiLCJlIjoic21hcnQtUHJhY3RpdGlvbmVyLTcyMDgwNDE2In0/fhir"
      "server": "https://launch.smarthealthit.org/v/r3/sim/eyJrIjoiMSIsImIiOiJkMGQwY2RlMC00YjIxLTQyZjYtOWMxZS1iZmE0NDdkNzIwNTkifQ/fhir"
    });

  }
}

export default SmartLaunchTest;