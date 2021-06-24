import React from "react";
import "./Auth.css"
import siteLogo from "../components/video-logo1.png"
import { Container, Row } from "react-bootstrap";

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <img className="logo-auth" src={siteLogo} />
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
    // </div>
  );
}

export default MainScreen;