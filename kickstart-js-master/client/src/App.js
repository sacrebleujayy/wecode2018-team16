import React, { Component } from 'react';
import './App.css';
import EventsWrapper from './EventsWrapper.js';


class App extends Component {
  state = {

    events: []
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    this.callApi()
      .then(res => {
        this.setState({ 
          events: res
        });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();


    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="wrapper">
        <header className="header-wrapper">
          <a href="#"><h1>Growing Gardens,<br></br>Growing Communities</h1></a>
        </header>
        <div className="organizer-wrapper">
          <span className="organizer-name">Jane Doe</span>
          <button className="organizer-contact button">Contact</button>
        </div>

        <EventsWrapper currentEvents = {this.state.events} />


      </div>
    );
  }
}

export default App;
