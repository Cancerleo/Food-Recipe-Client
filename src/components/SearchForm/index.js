import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Form, Button, FormControl } from "react-bootstrap";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");

  const updateSearch = (event) => {
    event.preventDefault();

    props.setSearch(query);
  };

  return (
    <Container>
      <Form inline onSubmit={updateSearch}>
        <FormControl
          type="text"
          placeholder="search"
          className="mr-sm-2"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}
