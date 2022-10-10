import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>
        <Link to={"/login"}> Log In</Link>
      </h1>
      <h1>
        <Link to={"/signin"}> Sign In</Link>
      </h1>
      <h1>{props.name ? `Welcome - ${props.name}` : "Sign In first!"}</h1>
    </div>
  );
}

export default Home;
