import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

/* ho una proprs che si chiama libri. quindi props.libri è l'array perchè dentro BookList sto passando libri={romance} ovvero sto passando una props.
 Adesso che ho l'array posso ciclarlo con map*/

/*const BookList = (props) => (
<Row>
  {props.libri.map( (libroelemento, index) => (
  <Col xs={12} md={3} key={`libroelemento-${index}`}>
  <SingleBook libro={libroelemento}/> SingleBook si aspetta una props chiamata libro. libroelemento è il singolo elemento di map. è il parametro
  </Col>
  
  ))}
</Row>
)
export default BookList;*/

/*al posto di avere tutto in un componente AllTheBook ho un componente BookList che riceve dei libri come props, li cicla e poi delega a SingleBook il compito di
generare la card*/

class BookList extends Component {
  state = {
    searchBook: " ",
  };

  render() {
    return (
      <>
        <Row>
          <Col></Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cerca un libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="cerca un libro"
                value={this.state.searchBook}
                onChange={(e) => this.setState({ searchBook: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Row>

        <Row>
          {this.props.libri
            .filter((libroelemento) => libroelemento.title.toLowerCase().includes(this.state.searchBook))
            .map((libroelemento, index) => (
              <Col xs={12} md={3} key={`libroelemento-${index}`}>
                <SingleBook libro={libroelemento} />{" "}
                {/* SingleBook si aspetta una props chiamata libro. libroelemento è il singolo elemento di map. è il parametro*/}
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
