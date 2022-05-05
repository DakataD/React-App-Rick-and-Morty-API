import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";


import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import CardDetails from "./components/Card/CardDetails";


function App() {
  return (
    <Router>
      <div className="App d-flex justify-content-center ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick and Morty" className="w-50 p-3 animate"/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api)
      .then((res) => res.json())
      .catch(error => console.log(error))
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
        <SearchBar  setSearch={setSearch} updatePageNumber={updatePageNumber}/>
      <div className="container">
        <div className="row">
         
          <div className="col-lg-11 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
       <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
