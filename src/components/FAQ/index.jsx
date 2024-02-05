import "./styles.css";
import { Accordion } from "react-bootstrap";
function AccordionFaq() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Berapa hari minimal sewa mobil lepas kunci?
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Berapa hari sebelumnya sabaiknya booking sewa mobil?
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function Faq() {
  return (
    <div id="faq" className="container-faq-section">
      <div className="container-faq-title">
        <h2>Frequently Asked Question</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="container-faq">
        <AccordionFaq />
      </div>
    </div>
  );
}

export default Faq;
