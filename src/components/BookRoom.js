import React, { Component } from "react";
import { Link } from "react-router-dom";

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let minDate2 = tomorrow.toISOString().slice(0, 10);

class BookRoom extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    date: this.minDate,
    date2: minDate2,
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleDate2 = (e) => {
    this.setState({
      date2: e.target.value,
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <>
        <form className="reserve-now">
          <h3 className="reserve-now-title">Reserve a room now!</h3>
          <span>
            <label htmlFor="arrivalDate">Check-in:</label>
            <br />
            <input
              style={
                this.state.date2 > this.state.date
                  ? { border: "2px solid rgba(0, 70, 0, 0.7)" }
                  : { border: "2px solid rgba(128, 30, 0, 0.493)" }
              }
              type="date"
              value={this.state.date}
              min={this.minDate}
              max={maxDate}
              onChange={this.handleDate}
            />
          </span>
          <span>
            <label htmlFor="departureDate">Check-out:</label>
            <br />
            <input
              style={
                this.state.date2 > this.state.date
                  ? { border: "2px solid rgba(0, 70, 0, 0.7)" }
                  : { border: "2px solid rgba(128, 30, 0, 0.493)" }
              }
              type="date"
              value={this.state.date2}
              min={minDate2}
              max={maxDate}
              onChange={this.handleDate2}
            />
          </span>
          {this.state.date2 > this.state.date ? (
            <Link to="/reservation" className="reserve-now-button">
              BOOK NOW!
            </Link>
          ) : (
            <div className="reserve-now-button2">Wrong Dates!</div>
          )}
        </form>
      </>
    );
  }
}
export default BookRoom;
