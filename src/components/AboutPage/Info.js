import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
              dolor finibus ipsum consequat lacinia. Phasellus ut metus dapibus,
              gravida ligula nec, cursus nulla. Quisque sollicitudin convallis
              dolor. Nunc nec magna ut metus fringilla vestibulum ac in justo.
              Aliquam non ultricies lorem. Morbi dictum felis odio, eget
              hendrerit mauris feugiat sed.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
