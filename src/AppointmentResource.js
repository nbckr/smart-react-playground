import React, {Component} from 'react' // var Component = React.Component; in browser

class AppointmentResource extends Component {

  render() {
    // FHIR resources will be passed in as props.resource
    const appointment = this.props.resource;
    console.log("Appointment created with resource:", appointment);

    return (
      <div style={{'border': '2px solid blue', 'padding': '0.5em', 'borderRadius': '1em'}}>
        <h1>Appointment {appointment.id}</h1>
        <p>
          <b>Reason: </b> {appointment.reason[0].coding[0].display}
        </p>
        <p>
          <b>Patient: </b> {appointment.participant[0].actor.reference}
        </p>
        <p>
          <b>From: </b> {appointment.start}
        </p>

      </div>
    )
  }

}

export default AppointmentResource;