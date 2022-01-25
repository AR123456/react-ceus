import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, autem
            error corrupti ut consectetur architecto fugiat cumque magni,
            mollitia labore pariatur quod. Ut debitis, quisquam natus officiis
            in quod nam! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Eos, autem error corrupti ut consectetur architecto fugiat
            cumque magni, mollitia labore pariatur quod. Ut debitis, quisquam
            natus officiis in quod nam!
          </Col>
          <Col sm={4}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, autem
            error corrupti ut consectetur architecto fugiat cumque magni,
            mollitia labore pariatur quod. Ut debitis, quisquam natus officiis
            in quod nam!
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            .
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt provident illum voluptas, beatae error molestiae magnam
                quasi. Nulla inventore repudiandae rerum, aperiam eum, velit,
                omnis officiis nam at quas quos!{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Card>
              <Card.Body>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae minus repudiandae quis in quidem ducimus incidunt
                magnam esse sapiente ex. Maxime eveniet ipsam nulla officia ea.
                Quidem ut temporibus totam?{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat blanditiis quisquam temporibus sapiente placeat dolore
                aliquid odit, nulla tempora ipsa voluptas labore ducimus quae
                cupiditate atque, laboriosam necessitatibus quas magnam.{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
