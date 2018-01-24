import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import Test from './components/Test';

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Application Test"
          />
          <Test />
          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
