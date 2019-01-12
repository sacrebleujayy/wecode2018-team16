import React, { Component } from 'react';

class Supplies extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Date:
          <input type='text' name='date' />
        </label>
        <label>
          Offering Supplies
          <input
            name="Offer"
            type="checkbox" />
        </label>
        <label>
          Need Supplies
          <input
            name="Need"
            type="checkbox" />
        </label>
        <label>
          Summary:
          <textarea />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div>
          <h2>Garett M.</h2>
          <h3>Jan 5th</h3>
          <p>Need soil specifically for new succulents I'm trying to repot.</p>
      </div>
            </div>
        );
    }
}

export default Supplies;