import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "../Header/index.module.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <div className={s.header}>
              <Row>
                <Col sm={10}>sm=8</Col>
                <Col sm={2}>
                  <div className={s.header__user}>
                    <div className={s.header__username}>
                      Агаев Мехман{" "}
                      <div className={s.header__username__avatar}>АМ</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Header;
