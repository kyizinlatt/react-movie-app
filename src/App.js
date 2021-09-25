import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* NavBar */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      {/* <Row title="Action" fetchUrl={requests.fetchActionMovies} /> */}
      {/* <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrie" fetchUrl={requests.fetchHorroryMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Document" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
