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

    handleOnClick = (target) => {
        this.setState({ activeView: target.value})
    }

    render() {
        const { activeView } = this.state;

        return (
            <div>
                <div id='button-container'>
                    <button id='events' value='events' onClick={this.handleOnClick}>Events</button>
                    <button id='supplies' value='supplies' onClick={this.handleOnClick}>Supplies</button>
                    <button id='connect' value='connect' onClick={this.handleOnClick}>Connect</button> 
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