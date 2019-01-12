import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Events.css'

export default class Events extends React.Component {

  static propTypes = {
    currentEvents: PropTypes.object,
  }

  state = {

  }


  render() {
    const raw = new Date();
    const month = raw.getMonth();

    return (
      <div>
        <button>create event</button>
        
        <div id='modal-container'>
          <div id='modal-content'>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Date:
              <input type='text' name='date' />
            </label>
            <label>
              Address:
              <input type='text' name='address' />
            </label>
            <label>
              Description:
              <input type='text' name='Description' />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        
        </div>
        
        
        
        <h1>{month}</h1>
        <button>arrow left</button>
        <button> arrow right</button>
        <ol>

        </ol>
      </div>

    )
    }
}
