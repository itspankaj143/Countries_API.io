// import "./CountryCard.css";
import { NavLink } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
  // console.log(name);
  return (
    <>
      <NavLink className="country-card" to={`/${name}`}>
        <img src={flag} alt={name + " Flag"} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default CountryCard;
