import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Reservation from "./pages/Reservation";
import Gallery from "./pages/Gallery";
import Cracow from "./pages/Cracow";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePL from "./pages/HomePL";
import RoomsPL from "./pages/RoomsPL";
import SingleRoomPL from "./pages/SingleRoomPL";
import ReservationPL from "./pages/ReservationPL";
import GalleryPL from "./pages/GalleryPL";
import CracowPL from "./pages/CracowPL";
import ContactPL from "./pages/ContactPL";

function App() {
  return (
    <Router>
      <div className="bg"></div>
      <>
        <Navbar />
        <ScrollToTop />
        <Switch>
          {/* EN */}
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/cracow" component={Cracow} />
          <Route exact path="/contact" component={Contact} />
          {/* PL */}
          <Route exact path="/strona-glowna" component={HomePL} />
          <Route exact path="/pokoje/" component={RoomsPL} />
          <Route exact path="/pokoje/:slug" component={SingleRoomPL} />
          <Route exact path="/rezerwacja" component={ReservationPL} />
          <Route exact path="/galeria" component={GalleryPL} />
          <Route exact path="/krakow" component={CracowPL} />
          <Route exact path="/kontakt" component={ContactPL} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
