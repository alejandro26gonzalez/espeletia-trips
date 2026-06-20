// SliderComp.jsx
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import {Carousel, Modal } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

const CarouselWrapper = styled.div`
  width: 75%;
  height: auto;
  position: relative;

  .carousel-item img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
`;

// Usamos forwardRef para exponer métodos al componente padre
const SliderComp = forwardRef(({ images }, ref) => {

  const carouselRef = useRef(null);
  const [show, setShow] = useState(false);

  // Exponemos los métodos nextSlide y prevSlide al padre
  useImperativeHandle(ref, () => ({
    nextSlide: () => {
      if (carouselRef.current) carouselRef.current.next();
    },
    prevSlide: () => {
      if (carouselRef.current) carouselRef.current.prev();
    },
  }));

  

  return (
    <CarouselWrapper>
      <Carousel ref={carouselRef} controls={false} indicators={false} fade={false}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img src={img} alt={`slide-${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <button
        onClick={() => setShow(true)}
        className="position-absolute top-0 end-0 m-4 px-3 py-2
                    d-flex align-items-center gap-2
                    bg-dark bg-opacity-75 text-white
                    border-0 rounded-pill shadow"
        style={{ cursor: "pointer", zIndex: 10, width:"150px" }}
      >
        <i className="bi bi-images"></i>
        Ver todo
      </button>

      <StyledModal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg">
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
                    maxHeight: "90vh",
                    objectFit: "contain",
                    backgroundColor:"rgba(0,0,0,0.8)"
                  }}
                />
              </Carousel.Item>
            ))}
            </Carousel>
          </Modal.Body>

      </StyledModal>
    </CarouselWrapper>
  );
});

export default SliderComp;

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