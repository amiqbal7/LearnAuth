import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column justify-content-center">
            <Card.Header>Dashboard</Card.Header>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>Hello, My name is {user?.name}</Card.Text>
            </Card.Body>
            <Card.Footer>{user?.email}</Card.Footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
