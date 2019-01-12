import React, { Component } from 'react';
import Events from './Events.js';

class EventsWrapper extends Component {

    static propTypes = {
        currentEvents: PropTypes.object,
    }

    state = {
        activeView: '',
    }

    render() {
        const { activeView } = this.state;

        return (
            <div>
                {activeView === '' &&
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