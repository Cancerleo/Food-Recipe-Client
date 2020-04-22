import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function About() {
  return (
    <div className="about">
      <h3>About this web</h3>
      <p>
        {" "}
        Aliquam quis cursus turpis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. In hac habitasse
        platea dictumst. Cras ac felis metus. Vestibulum fermentum nulla sed
        imperdiet volutpat. Donec enim arcu, fermentum vel felis sed, bibendum
        vehicula leo. Integer quis pharetra nunc.{" "}
      </p>
      <p>
        Mauris at semper nisl, vitae mattis neque. In hac habitasse platea
        dictumst. Nunc at lectus et nunc tempor cursus. Praesent posuere, dolor
        eu accumsan euismod, ligula diam elementum est, id dignissim eros felis
        nec purus. Ut id ex dui. Ut vehicula lorem risus, vitae tempor mi
        bibendum a. Maecenas mollis, dolor non molestie imperdiet, nunc nisl
        dictum tortor, a tristique sem quam id leo. Curabitur vulputate risus
        nulla. Fusce sagittis purus viverra ex cursus, at bibendum justo congue.
      </p>
      <Link to={`/recipes`}>
        <Button className="mb-2" variant="success">
          Continue
        </Button>
      </Link>
    </div>
  );
}
