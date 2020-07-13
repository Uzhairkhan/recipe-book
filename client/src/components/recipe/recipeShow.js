import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "./recipeForm";

export default function recipeShow() {
  return (
    <div className="forms-page">
      <Container>
        <div className="recipe-form">
          <Row className="title">
            <h2>Add a Recipe</h2>
          </Row>
          <Row>
            <Form />
          </Row>
        </div>
      </Container>
    </div>
  );
}
