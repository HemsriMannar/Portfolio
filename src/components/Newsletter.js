import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Click Here to download My Resume</h3>
            </Col>
            <Col md={6} xl={7}>
            <a href="/assets/img/My Resume.pdf" download="Hemsri Resume.pdf" className="bx">
              <button type="submit">Download</button>
            </a>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
