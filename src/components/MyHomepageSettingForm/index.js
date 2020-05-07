import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import UploadProfilePic from "./uploadProfilePic";

export default function MyHomepageSettingForm() {
  return (
    <div>
      <Row>
        <Col md="7">
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
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Country</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
          </Form>
          <Form.Row>
            <Form.Label> Date of Birth</Form.Label>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" value="Choose...">
                <option>Month</option>
                <option> January </option>
                <option> February </option>
                <option> March </option>
                <option> April</option>
                <option> May </option>
                <option> June </option>
                <option> July </option>
                <option> August </option>
                <option> September </option>
                <option> October </option>
                <option> November </option>
                <option> December </option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" value="Choose...">
                <option>Date</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" value="Choose...">
                <option>Year</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <br />
        </Col>
        <Col md="5">
          <h3>Upload your image</h3>
          <UploadProfilePic />
        </Col>
      </Row>
    </div>
  );
}
