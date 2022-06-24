import React from "react";
import Container from "./components/Container";
import NavBar from "./components/NavBar";

import generateRoutines from "./data/RoutineData";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      routines: generateRoutines(),
      query: ''
    };
  }

  onSearchChange = (query) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        query: query
      };
    })
  }

  onIsCompleteChange = (routineId) => {
    const routines = this.state.routines.map((routine) => {
      if (routine.id !== routineId) return routine;

      routine.isComplete = !routine.isComplete;
      return routine;
    });

    this.setState({ routines: routines });
  };

  onDelete = (routineId) => {
    const routines = this.state.routines.filter((routine) => routine.id !== routineId);

    this.setState({ routines: routines });
  }

  queryFilter = (routine) => routine.content.toLowerCase().includes(this.state.query.toLowerCase());

  render() {
    return (
      <>
        <NavBar onSearchChange={this.onSearchChange} />

        <Container
          routines={this.state.routines.filter(this.queryFilter)}
          onIsCompleteChange={this.onIsCompleteChange}
          onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;