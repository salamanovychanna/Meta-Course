import React from "react";
import CallToAction from "../CallToAction";
import Specials from "../Specials";
import Testimonials from "../Testimonials";
import ProjectDescription from "../ProjectDescription";

const Home = () => {
  return (
    <main style={{ minHeight: "90vh" }}>
      <CallToAction />
      <Specials/>
      <Testimonials/>
      <ProjectDescription/>
    </main>
  );
};

export default Home;
