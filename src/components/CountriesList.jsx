import { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

// import "./CountriesList.css";

const CountriesList = ({ query }) => {
  //TODO: filter the country
  // const [query, setquery] = useState("");
  // const filteredCountries = countriesData.filter((country) =>
  //   country.name.common.toLowerCase().includes("india")
  // );
  // console.log(filteredCountries);
  //   console.log(countriesData);

  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      {/* <input
        type="text"
        name=""
        id=""
        onChange={(e) => setquery(e.target.value.toLowerCase())}
      /> */}
      <div className="countries-container">
        {countriesData
          .filter(
            (country) =>
              country.name.common.toLowerCase().includes(query) ||
              country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
};

export default CountriesList;
