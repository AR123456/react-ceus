import React from "react";
import {
  Container,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <CardGroup>
          <Card>
            <CardImg
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/180/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Inperson Classes</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Looking for in person opportunites ?
              </CardSubtitle>
              <CardText>See what we have in your area</CardText>
              <Link to="/inperson">
                <Button>In Person</Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/200/200"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">On Demand Learning </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Do on your own time
              </CardSubtitle>
              <CardText>
                Browse our currated list of articles to study and test out for
                CEUs.
              </CardText>
              <Link to="/ondemand">
                <Button>On Demand</Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/300/300"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Webinars</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Zoom into our classrooms
              </CardSubtitle>
              <CardText>
                Full offering of interactive web based CEU classes .
              </CardText>
              <Link to="/webinar">
                <Button>Webinars</Button>
              </Link>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Who we are and what we do </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                CEUs when and where you need them
              </CardSubtitle>
              <CardText>
                Looking for flexable leaning opportunities? Go no further we
                have just what you need. CEUs for all professions !
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Hot and in demand </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Featured Class
              </CardSubtitle>
              <CardText>
                Learn with our experts about this relevant and timley topic
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/180/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Live </CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText> */}
              <Link to="/inperson">
                <Button>In Person</Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/200/200"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Articles</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText> */}
              <Link to="/ondemand">
                <Button>Articles</Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="rounded-circle"
              alt="Card image cap"
              src="https://picsum.photos/300/300"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Remote Leaning</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText> */}
              <Link to="/webinar">
                <Button>Webinars</Button>
              </Link>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="text-center">
            <CardBody>
              <CardTitle tag="h5">Testimonials</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
              <CardText>
                <iframe
                  title="Approching"
                  width="400"
                  height="300"
                  src="https://www.youtube.com/embed/qulqm3WDwC4?list=UUQqnLXLhmulg9RafT5ervlg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
