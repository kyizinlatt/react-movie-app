import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Banner />

      <div className="container-fluid">
        <div className="row">
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
          />
        </div>

        <div className="row">
          <Row
            title="TOP RATED"
            fetchUrl={requests.fetchTopRated}
            isLargeRow={true}
          />
        </div>

        {/* <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} /> */}
        {/* <Row title="Horrie" fetchUrl={requests.fetchHorroryMovies} /> */}
        {/* <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} /> */}
        {/* <Row title="Document" fetchUrl={requests.fetchDocumentaries} /> */}
      </div>

      {/* NavBar */}
      {/* <Nav /> */}
    </div>
  );
}

export default App;
