import React, {Component, Fragment} from 'react'
import SmartQueryTest from "./SmartQueryTest";
import SmartLaunchTest from "./SmartLaunchTest";

class App extends Component {
    render() {
        return (
          <Fragment>
              <SmartLaunchTest/>
              <SmartQueryTest/>
          </Fragment>
        )
    }
}

export default App;
