import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="App">
      <img src={require("../assets/not-found.gif")} />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
