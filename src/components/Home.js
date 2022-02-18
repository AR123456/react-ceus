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
import { GiTeacher } from "react-icons/gi";
import { GrArticle, GrVirtualMachine } from "react-icons/gr";

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
                Browse our curated list of articles to study and test out for
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
                Full offering of interactive web based CEU classes.
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
        <CardGroup className="text-center ">
          <Card className="rounded-circle">
            <CardBody>
              <GiTeacher size={200}></GiTeacher>
              <CardTitle tag="h5">Live </CardTitle>
              <Link to="/inperson">
                <Button>In Person</Button>
              </Link>
            </CardBody>
          </Card>
          <Card className="rounded-circle">
            <CardBody>
              <GrArticle size={200}></GrArticle>
              <CardTitle tag="h5">Articles</CardTitle>
              <Link to="/ondemand">
                <Button>Articles</Button>
              </Link>
            </CardBody>
          </Card>
          <Card className="rounded-circle">
            <CardBody>
              <GrVirtualMachine size={200}></GrVirtualMachine>
              <CardTitle tag="h5">Remote Leaning</CardTitle>

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
                  width="872"
                  height="400"
                  src="https://www.youtube.com/embed/E3XsWHZGHTo?list=RDWpVR9uusaQY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
