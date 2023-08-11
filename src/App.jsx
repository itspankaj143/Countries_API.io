import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import SelectMenu from "./components/SelectMenu";
import Contact from "./components/Contact";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div className="search-filter-container">
                  <SearchBar setquery={setQuery} />
                  <SelectMenu setquery={setQuery} />
                </div>
                <CountriesList query={query} />
              </main>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:country" element={<CountryDetail />} />
        </Routes>
      </Router>

      {/* <main>
        <div className="search-filter-container">
          <SearchBar setquery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main> */}
    </>
  );
}

export default App;
