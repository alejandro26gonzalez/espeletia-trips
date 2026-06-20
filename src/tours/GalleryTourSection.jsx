import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .modal-content {
    background: transparent !important; /* Quita fondo blanco */
    border: none !important;           /* Quita borde */
  }

  .modal-header,
  .modal-footer {
    background: transparent !important; /* Opcional: header/footer transparentes */
    border: none !important;
  }
`;
const ResponsiveCol = styled(Col)`
  @media (max-width: 768px) {
    display: none;
  }
`;

function GalleryTourSection({ images }) {

  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="my-4">
        
        <Row className="g-3 position-relative">

          {/* Columna izquierda */}
          <Col md={8}>
            <div className="ratio ratio-1x1">
              <img
                src={images[0]}
                alt=""
                className="w-100 h-100 object-fit-cover rounded-start"
              />
            </div>
          </Col>

          {/* Columna derecha */}
          <ResponsiveCol md={4} className="flex-column gap-3">
            <div className="ratio ratio-1x1">
              <img
                src={images[1]}
                alt=""
                className="w-100 h-100 object-fit-cover rounded-top-end"
              />
            </div>

            <div className="ratio ratio-1x1">
              <img
                src={images[2]}
                alt=""
                className="w-100 h-100 object-fit-cover rounded-bottom-end"
              />
            </div>
          </ResponsiveCol>

          {/* BOTÓN SOBRE TODO EL COLLAGE */}
          <button
            onClick={() => setShow(true)}
            className="position-absolute top-0 end-0 m-4 px-3 py-2
                       d-flex align-items-center gap-2
                       bg-dark bg-opacity-75 text-white
                       border-0 rounded-pill shadow"
            style={{ cursor: "pointer", zIndex: 10, width:"150px" }}
          >
            <i className="bi bi-images"></i>
            Ver fotos
          </button>

        </Row>
      </Container>

      {/* MODAL CON GALERÍA */}
      <StyledModal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton />

        <Modal.Body className="p-0">

          <Carousel>
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt=""
                  className="d-block w-100"
                  style={{
                    maxHeight: "80vh",
                    objectFit: "contain",
                    backgroundColor:"rgba(0,0,0,0.8)"
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

        </Modal.Body>
      </StyledModal>
    </>
  );
}

export default GalleryTourSection;
