import { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumbeRoot from "./components/DisplayNumberRoot";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumbeRoot number={this.state.number}></DisplayNumbeRoot>
      </div>
    );
  }
}

export default App;
