import React from "react";
import Card from "react-bootstrap/Card";
import "./ContentCard.style.css";

const ContentCard = ({ item }) => {
  return (
    <div className="content-card">
      <Card >
        <Card.Body>
          <Card.Title>{item.id}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContentCard;
