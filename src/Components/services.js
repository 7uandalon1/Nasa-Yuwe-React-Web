import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.propsM.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.propsM.subtitle}</h4>
        <p>{props.propsM.body}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Services(props) {
  const propsM = props;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <div className="service_item">
        <div className="service_img_holder">
          <img
            src={props.img_holder}
            class="img-fluid rounded-top"
            alt=""
            loading="lazy"
          ></img>
        </div>

        <div className="text_button_holder">
          <div className="service_title_holder">
            <h1>{props.header}</h1>
          </div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Mostrar Servicio
          </Button>
        </div>
      </div>
      <MyVerticallyCenteredModal
        propsM={propsM}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export { Services };
