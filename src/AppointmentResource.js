import React, { Component } from 'react' // var Component = React.Component; in browser

class AppointmentResource extends Component {
  
  render() {
    // FHIR resources will be passed in as props.resource
    const appointment = this.props.resource;
    
    console.log(appointment);
    return(
      <div>
        <h1>Appointment</h1>
        <p>
          <b>Description: </b> {appointment.description}
        </p>
        <p>
        <b>From:        </b> {appointment.start}
        </p>
        <p>
        <b>To:          </b> {appointment.end}
        </p>

      </div>
    )
  }
  
}

export default AppointmentResource;