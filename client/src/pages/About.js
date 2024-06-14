import React from "react";
import "./about.css";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 ">
            <div className="content mx-2 my-2 fs-5">
              Our Story: Founded with a passion for crafting delightful homemade
              sweets and snacks. A family-owned venture dedicated to spreading
              joy through authentic flavors.
            </div>
            <div className="content mx-2 my-2 fs-5">
              Quality Ingredients: Committed to using only the finest, locally
              sourced ingredients. Handpicked spices, premium nuts, and fresh
              produce for an authentic taste.
            </div>
            <div className="content mx-2 my-2 fs-5">
              Homemade Goodness: Each treat is carefully crafted in our kitchen,
              ensuring homemade perfection.
            </div>

            <div className="content mx-2 my-2 fs-5">
              Made with Love: Infused with love and care, our creations are more
              than just treats;
            </div>
            <div className="content mx-2 my-2 fs-5">
              Customer Satisfaction: Your satisfaction is our priority. We
              welcome feedback and continually strive to exceed your
              expectations.
            </div>
            <div className="content mx-2 my-2 fs-5">
              Experience the Sweetness: Dive into a world where sweetness meets
              tradition. Discover the joy of authentic, homemade sweets and
              snacks with every order.
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
