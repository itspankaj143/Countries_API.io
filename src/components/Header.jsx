import {} from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer">&nbsp;&nbsp;Dark Mode</p>
        </div>
      </header>
    </>
  );
};

export default Header;
