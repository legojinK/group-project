import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import './LoginPage.style.css';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

      <div className="login-container">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              <Card className="login-card">
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="login-label">Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"  required onChange={(event) => setEmail(event.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="login-label">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password"required
                                    onChange={(event) => setPassword(event.target.value)}/>
                    </Form.Group>

                    <div className="button-container">
                      <Button variant="primary" type="submit" className="login-button">
                        로그인
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default LoginPage;
