import React from "react";
import FAQsAccordion from "./faqsaccordion/FAQsAccordion";

const FAQs = () => {
  return (
    <section id="faqs" className="text-center section-spacing">
      <div className="container px-4">
        <p className="subtitle-text mb-0 text-light">Any Queries</p>
        <h1 className="main-header-text mb-4">
          FAQs<i className="bi bi-question-circle-fill fs-2 header-icon"></i>
        </h1>
        <p className="slogan-text px-lg-5 mx-auto text-light">
          Some common questions we get, here's the answers
        </p>
        <FAQsAccordion />
      </div>
    </section>
  );
};

export default FAQs;
