import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Events from './Events.js';
import Supplies from './Supplies';

class EventsWrapper extends Component {

    static propTypes = {
        currentEvents: PropTypes.object,
    }

    state = {
        activeView: 'events',
    }

    handleOnClick = (e, context) => {
        this.setState({ activeView: context})
    }

    render() {
        const { activeView } = this.state;

        return (
            <div>
                <div id='button-container'>
                    <button id='events' onClick={(e, context) => this.handleOnClick(e, 'events')}>Events</button>
                    <button id='supplies' onClick={(e, context) => this.handleOnClick(e, 'supplies')}>Supplies</button>
                    <button id='connect'  onClick={(e, context) => this.handleOnClick(e, 'connect')}>Connect</button> 
                </div>

                {activeView === 'events' &&
                    <Events/>
                }
                {activeView === 'supplies' &&
                    <Supplies/>
                }
                {activeView === 'connect' &&
                    <p>connect</p>
                }
            </div>
        );
    }
}

export default EventsWrapper;