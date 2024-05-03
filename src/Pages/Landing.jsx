import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Landing() {
  const { isLoading } = useSelector((state) => state.userState);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="center-cont">
      <div className="hero">
        <h2 className="hero-title">Dive into topics that you love</h2>
        <p className="hero-info">
          Share your knowledge with the world, discover ideas from people
          Whether you're passionate about technology, fascinated by history, or
          seeking inspiration, you'll find something here.
        </p>

        <Link to={"/register"}>
          <button type="button" className="btn hero-btn">
            start here
          </button>
        </Link>
      </div>

      <div className="featured-cont">
        <h2>Featured Posts</h2>
      </div>
    </section>
  );
}

export default Landing;
