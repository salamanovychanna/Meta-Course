import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section style={{minHeight: '90vh'}}>
      <h1 style={{ marginBottom: "40px" }}>This page doesn't exists</h1>
      <Link to={"/"}>
        <Button>Go back to homepage</Button>
      </Link>
    </section>
  );
};

export default PageNotFound;
