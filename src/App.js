import React from "react";

import ResourceList from "./components/ResourceList";

class App extends React.Component {
  state = {
    resourceName: "posts"
  };

  render() {
    return (
      <React.Fragment>
        <h1>API CALL - CLASS BASED COMPONENTS</h1>
        <button
          className="button"
          onClick={() => this.setState({ resourceName: "posts" })}
        >
          POSTS LIST
        </button>
        <button
          className="button"
          onClick={() => this.setState({ resourceName: "todos" })}
        >
          TODOS LIST
        </button>
        <ResourceList resourceName={this.state.resourceName} />
      </React.Fragment>
    );
  }
}
export default App;
