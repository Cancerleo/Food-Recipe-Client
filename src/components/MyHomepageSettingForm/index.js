import React from "react";
import { Col, Form } from "react-bootstrap";

export default function MyHomepageSettingForm() {
  return (
    <div>
      <Col md="5">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Please Select</Form.Label>
            <Form.Control as="select">
              <option>Female</option>
              <option>Male</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form>
      </Col>
    </div>
  );
}
