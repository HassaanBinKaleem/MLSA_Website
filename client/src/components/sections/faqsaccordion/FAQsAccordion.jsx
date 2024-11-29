import Accordion from "react-bootstrap/Accordion";

function FAQsAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">What is MLSA?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">What is MLSA Multan Chapter?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">Can I join MLSA?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">How to get register for MLSA program?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">What are the main purpose of MLSA Multan?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">How can I served being a MLSA member?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">Can I get learned the tech skills in MLSA?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">
            Does MLSA Multan Chapter had plan an events globally?
          </h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">Is there goes an online event?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9" className="custom-accordion">
        <Accordion.Header>
          <h4 className="mb-0">How do I get started with MLSA Multan?</h4>
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p className="mb-0">Answer Here</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQsAccordion;
