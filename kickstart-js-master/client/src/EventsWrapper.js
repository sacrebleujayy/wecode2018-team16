import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Events from './Events.js';

class EventsWrapper extends Component {

    static propTypes = {
        currentEvents: PropTypes.object,
    }

    state = {
        activeView: 'events',
    }

    handleOnClick = (context) => {
        this.setState({ activeView: context})
    }

    render() {
        const { activeView } = this.state;

        return (
            <div>
                <div id='button-container'>
                    <button id='events' onClick={this.handleOnClick('events')}>Events</button>
                    <button id='supplies' onClick={this.handleOnClick('supplies')}>Supplies</button>
                    <button id='connect' onClick={this.handleOnClick('connect')}>Connect</button> 
                </div>

                {activeView === 'events' &&
                    <Events/>
                }
                {activeView === 'supplies' &&
                    <p>Supplies</p>
                }
                {activeView === 'connect' &&
                    <p>connect</p>
                }
            </div>
        );
    }
}

export default EventsWrapper;