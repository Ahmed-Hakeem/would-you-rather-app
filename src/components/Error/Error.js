import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={{ textAlign: "center", height: "100%", color: "red" }}>
      <h1>Sorry</h1>
      <h2>this page isn't available in our database</h2>
      <h3>please click link below to sign In</h3>
      <Link
        to={{ pathname: "/SignIn" }}
        style={{
          width: "60px",
          height: "40px",
          display: "block",
          margin: "0px auto",
          padding: "4px",
          border: "2px solid red",
        }}
      >
        Sign In
      </Link>
    </div>
  );
};

export default Error;
