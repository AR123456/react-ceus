import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Table,
} from "reactstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const WebinarClasses = () => {
  return (
    <>
      <Container>
        <Navigation></Navigation>
        <div className="h-100 p-5 bg-light border rounded-3">
          <div className="container-fluid bg-light text-dark p-5">
            <div className="container bg-light p-5">
              <h1 className="display-4 fw-bold">List of webinars </h1>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>CEUs</th>
                    <th>Type</th>
                    <th>Cost</th>
                    <th>Description</th>
                    <th>More Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cras justo odio</td>
                    <td>Dapibus ac facilisis in</td>
                    <td>Morbi leo risus</td>
                    <td>Porta ac consectetur a</td>
                    <td>Vestibulum at eros</td>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, dolorem consequuntur? Asperiores voluptate eligendi
                      officia ipsum corrupti, aut sapiente natus nemo. Ipsam
                      doloremque eum id, quam enim porro voluptates asperiores.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default WebinarClasses;
