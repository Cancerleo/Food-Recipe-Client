import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { postRecipes } from "../../store//user/actions";

export default function AddRecipesForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );

  function submitForm(event) {
    event.preventDefault();

    // console.log(name, content, imageUrl);
    dispatch(postRecipes(name, description, imageUrl));
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Add your fav recipes</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Your recipe name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Describe little bit about this recipe"
          as="textarea"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          type="text"
          placeholder="Show your food pic"
        />
        {imageUrl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Add
        </Button>
      </Form.Group>
    </Form>
  );
}
