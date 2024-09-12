import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row, Col, Card } from 'react-bootstrap';
import './LoginPage.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, setLoginError, clearErrors } from '@features/User/AuthReducer';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginError } = useSelector(state => state.auth); // 상태 가져오기

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();

    // 로그인 로직 (이메일/비밀번호가 맞는지 체크)
    if (email === 'test@gmail.com' && password === 'pw123123') {
      dispatch(login({ email })); // 로그인 성공 시 user 정보를 Redux 상태와 로컬 스토리지에 저장
      navigate('/');
    } else {
      dispatch(setLoginError('이메일 또는 비밀번호가 잘못되었습니다.')); // 에러 설정
    }
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <Card className="login-card">
              <Card.Body>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="login-label">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={event => setPassword(event.target.value)}
                    />
                  </Form.Group>

                  {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

                  <div className="button-container">
                    <Button
                      variant="primary"
                      type="submit"
                      className="login-button"
                    >
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
