import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Login from "../images/login.png";
import "./login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <div className="LOGIN">
        <img id="IMMG" src={Login} width={500} style={{ borderRadius: "30px" }} />
        <div style={{ padding: "10px" }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom03">
              <Form.Label style={{ color: "white" }}>Enter Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Please Enter valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Label style={{ color: "white" }}>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter valid Password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Check
                style={{ color: "white", marginTop: "10px" }}
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button style={{ marginTop: "15px" }} type="submit">
              Login
            </Button>
            <p>Don't have an account? <Link to="/signUp">Click here</Link></p>
          </Form>
        </div>
      </div>
     
    </>
  );
}
export default LoginPage;
