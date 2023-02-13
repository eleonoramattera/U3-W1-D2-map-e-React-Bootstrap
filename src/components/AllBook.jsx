import { Container, Card, Col, Row } from "react-bootstrap";
import romance from "../data/romance.json";

const AllBook = () => {
  return (
    <Container style={{ width: "100%" }}>
      <Row>
        {romance.map((libro, index) => {
          return (
            <Col xs={12} md={3} key={`libro-${index}`}>
              <Card style={{ marginBottom: "50px", height: "530px" }} className="book-cover">
                <Card.Img variant="top" src={libro.img} />
                <Card.Body>
                  <Card.Title>{libro.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllBook;
