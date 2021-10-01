import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMaps extends Component {
  state = {};

  render() {
    const mapStyles = {
      width: "100%",
      height: "40%",
      border: "2px solid rgb(36, 7, 7)",

      //   marginTop: "5vh",
      //   position: "absolute",
      //   left: 0,
      //   top: 0,
      //   zIndex: 1,
    };
    return (
      <Map
        className="mapsStyle"
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  //   apiKey: "TOKEN HERE",
})(GoogleMaps);
