import React from "react";
import {
  Container,
  CardGroup,
  Card,
  Button,
  Form,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
 
import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { GrArticle, GrVirtualMachine } from "react-icons/gr";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form center>
              <FormControl
                type="text"
                placeholder="Search all offerings "
                className="mr-sm-2"
              />
              <Button variant="secondary">Search</Button>
            </Form>
          </Col>
        </Row>
        <CardGroup>
          <Card>
            <Card.Img
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/180/180"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Inperson Classes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Looking for in person opportunites ?
              </Card.Subtitle>
              <Card.Text>See what we have in your area</Card.Text>
              <Link to="/inperson">
                <Button variant="secondary">In Person</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/200/200"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">On Demand Learning </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Do on your own time
              </Card.Subtitle>
              <Card.Text>
                Browse our curated list of articles to study and test out for
                CEUs.
              </Card.Text>
              <Link to="/ondemand">
                <Button variant="secondary">On Demand</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/300/300"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Webinars</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Zoom into our classrooms
              </Card.Subtitle>
              <Card.Text>
                Full offering of interactive web based CEU classes.
              </Card.Text>
              <Link to="/webinar">
                <Button variant="secondary">Webinars</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card>
            <Card.Img
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Who we are and what we do </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                CEUs when and where you need them
              </Card.Subtitle>
              <Card.Text>
                Looking for flexable leaning opportunities? Go no further we
                have just what you need. CEUs for all professions !
              </Card.Text>
              <Button variant="secondary">Button</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <Card.Body>
              <Card.Title tag="h5">Hot and in demand </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" tag="h6">
                Featured Class
              </Card.Subtitle>
              <Card.Text>
                Learn with our experts about this relevant and timley topic
              </Card.Text>
              <Button variant="secondary">Button</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup className="text-center ">
          <Card className="rounded-circle">
            <Card.Body>
              <GiTeacher size={200}></GiTeacher>
              <Card.Title tag="h5">Live </Card.Title>
              <Link to="/inperson">
                <Button variant="secondary">In Person</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="rounded-circle">
            <Card.Body>
              <GrArticle size={200}></GrArticle>
              <Card.Title tag="h5">Articles</Card.Title>
              <Link to="/ondemand">
                <Button variant="secondary">Articles</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="rounded-circle">
            <Card.Body>
              <GrVirtualMachine size={200}></GrVirtualMachine>
              <Card.Title tag="h5">Remote Leaning</Card.Title>

              <Link to="/webinar">
                <Button variant="secondary">Webinars</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="text-center">
            <Card.Body>
              <Card.Title tag="h5">Testimonials</Card.Title>

              <Card.Text>
                <iframe
                  width="872"
                  height="400"
                  src="https://www.youtube.com/embed/E3XsWHZGHTo?list=RDWpVR9uusaQY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Card.Text>
              <Button variant="secondary">Button</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
