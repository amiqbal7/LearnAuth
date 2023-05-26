import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../redux/actions/post";

function Posts() {
 const dispatch = useDispatch();

 const { posts } = useSelector((state) => state.post)

 useEffect(() => {
  dispatch(getposts());

 }, [dispatch])

  return (
    <Container className="p-4">
      <Row>
        {posts?.length > 0 &&
          posts.map((post) => (
            <Col key={post?.id} className="my-2">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">{post?.title}</Card.Title>
                  <Card.Text>{post?.body}</Card.Text>
                  <Card.Link as={Link} to={`/posts/${post?.id}`}>
                    Details
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Posts;