import { Component } from "react";
import { Row, Card, Col } from "react-bootstrap";

/*const SingleBook = (props) => {
  return (
    <Row>
      <Col xs={12} md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.libro.img} /> (libro perchè in AllTheBooks l'ho chiamato così)
          <Card.Body>
            <Card.Title>{props.libro.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleBook;*/

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Row>
        <Col xs={12} md={4}>
          {" "}
          {/* Devo riflettere il cambio di stato. il bordo è collegato allo stato this.state.selected*/}
          <Card style={{ width: "200px", border: this.state.selected ? "4px solid green" : "" }}>
            <Card.Img
              variant="top"
              src={this.props.libro.img}
              onClick={() => this.setState({ selected: !this.state.selected })}
            />
            <Card.Body>
              {/*!mi serve in un booleano per convertirlo nel suo opposto */}
              <Card.Title>{this.props.libro.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SingleBook;
