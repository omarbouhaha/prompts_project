import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-powered Prompts </span>
      <p className="desc text-center">
        Promptopia is an open source AI prompting tool for modern world to
        discovers, create and share creative prompts{" "}
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
