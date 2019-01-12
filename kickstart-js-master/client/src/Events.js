import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Events.css'

export default class Events extends Component {

  static propTypes = {
    currentEvents: PropTypes.object,
  }

  state = {

  }


  render() {

    return (
      <div>
        <button>create event</button>
    
        <h1>Jan</h1>
        <button><FaArrowLeft/></button>
        <button><FaArrowRight/></button>
        <ul>
          <li>
            <div>
              <h1>Community Potluck</h1>
              <h2>Hosted by: Amanda P.</h2>
              <h2>Jan. 5th 6:30pm</h2>
              <p>1234 Lane St. Portland</p>
              <p>I have had an excellent harvest and wanted to make some delicous dishes to share. If you would like come out and bring something from your own garden.</p>
            </div>
          </li>
        </ul>
      </div>

    )
    }
}
