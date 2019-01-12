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
    const raw = new Date();
    const month = raw.getMonth();

    return (
      <div>
        <button>create event</button>
        
        <div id='modal-container'>
          <div id='modal-content'>
          <span className='close'>X</span>
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
        <button><FaArrowLeft/></button>
        <button><FaArrowRight/></button>
        <ol>

        </ol>
      </div>

    )
    }
}
