import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppLayout.style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@store/redux/AuthSlice";

const menuItems = [
  {
    title: "입양정보",
    contents: [
      { content: "반려동물 입양안내", page: "AdoptGuidePage", path: "/guide" },
      { content: "반려동물 입양교육", page: "AnimalLove", path: "/guide" },
      {
        content: "나에게 맞는 반려동물 찾기",
        page: "AnimalTaste",
        path: "/guide",
      },
    ],
  },
  {
    title: "구조동물",
    contents: [
      { content: "보호 중인 동물", page: "AnimalsPage", path: "/animals" },
    ],
  },
  {
    title: "동물보호소",
    contents: [
      { content: "동물보호소 조회", page: "SheltersPage", path: "/shelters" },
    ],
  },
];

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogoClick = () => {
    return navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="navbar">
            <Navbar.Brand>
              <div className="navbar-logo-area">
                <div className="navbar-logo-img-box" onClick={handleLogoClick}>
                  <img
                    className="navbar-logo-img"
                    src="DASIPET_logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="navbar-logo-text" onClick={handleLogoClick}>
                  DASI PET
                </div>
              </div>
            </Navbar.Brand>
            <div style={{ display: "flex" }}>
              <div className="navbar-login-btn">
                {user ? (
                  <button className="navbar-login" onClick={handleLogout}>
                    로그아웃
                  </button>
                ) : (
                  <button
                    className="navbar-login"
                    onClick={() => navigate("/login")}
                  >
                    로그인
                  </button>
                )}
              </div>
              <Navbar.Toggle aria-controls="navbarScroll">
                <div className="hamburger-btn">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                // style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {menuItems.map((item, outerIdx) => {
                  return (
                    <NavDropdown title={item.title} key={outerIdx}>
                      {item.contents.map((content, innerIdx) => {
                        return (
                          <NavDropdown.Item
                            key={innerIdx}
                            onClick={() => navigate(`${content.path}`)}
                          >
                            {content.content}
                          </NavDropdown.Item>
                        );
                      })}
                      {item.title === "구조동물" && user && (
                        <NavDropdown.Item
                          onClick={() => navigate("/animals/like")}
                        >
                          즐겨찾기한 동물
                        </NavDropdown.Item>
                      )}
                    </NavDropdown>
                  );
                })}
              </Nav>
              <div className="navbar-collapse-login-btn">
                {user ? (
                  <button className="navbar-login" onClick={handleLogout}>
                    로그아웃
                  </button>
                ) : (
                  <button
                    className="navbar-login"
                    onClick={() => navigate("/login")}
                  >
                    로그인
                  </button>
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* "/" 안에 있는 자손 페이지들 */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
