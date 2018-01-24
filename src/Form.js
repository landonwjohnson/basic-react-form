import React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from 'material-ui/DatePicker';

const newStyle = {
  paddingLeft: '40px',
  paddingRight: '40px',
  background: 'grey',
  // height: 'calc(100vh - 64px)'
}
export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    color: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      color: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      color: ""
    });
  };

  render() {
    return (
      <form style={newStyle}>

        <TextField
          name="firstName"
          floatingLabelText="First Name"
          floatingLabelFixed={false} 
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />

        <br />

        <TextField
          name="lastName"
          floatingLabelText="Last Name"
          floatingLabelFixed={false} 
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />

        <br />

        <DatePicker
          name="birthDate"
          hintText="When's your birthday?"
          value={this.state.birthDate}
          onChange={ e => this.change(e)}
        />

        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary/>
      </form>
    );
  }
}
