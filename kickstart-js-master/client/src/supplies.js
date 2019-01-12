import React, { Component } from 'react'; 

export default class Supplies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Let your neighbors know about extra supplies you have to share, or ask for supplies you need.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('a supply offer or request was posted' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Offer or request supplies:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  
}