import React, { useState } from "react";
import SignUPLOGO from '../../images/signup.png'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import './signup.css'

const SignUp = () => {
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
   <div className='MainDiv'>
    <img id="IMG" src={SignUPLOGO} width={600} height={500}/>
    <div >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom03">
              <Form.Label style={{ color: "white" }}>Enter First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" required />
              <Form.Control.Feedback type="invalid">
                Please Enter valid First Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Label style={{ color: "white" }}>Enter Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter valid Password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Label style={{ color: "white" }}>Enter Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter valid Email Address.
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
            <Form.Group controlId="validationCustom03">
              <Form.Label style={{ color: "white" }}>Enter Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter valid Phone Number.
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
              Sign Up
            </Button>
            <p>Already have an account? <Link to="/">Click here</Link></p>
          </Form>
        </div>
   </div>
   </>
  )
}
export default SignUp