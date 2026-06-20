import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Title from "../components/Title"
import Form from 'react-bootstrap/Form'
import Button from "../components/Button"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {IMAGES_URLS} from '../constants/images'

const FormSection = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logos = 
    [
        {
            id:1,
            text: "logo ecologico",
            logo: IMAGES_URLS.ECOLOGICLOGO
        },
        {
            id:2,
            text: "logo seguridad",
            logo: IMAGES_URLS.SEGUROLOGO
        },
        {
            id:3,
            text: "logo escudo",
            logo: IMAGES_URLS.ESCUDOLOGO
        },
        {
            id:4,
            text: "logo amigable",
            logo: IMAGES_URLS.AMIGABLELOGO
        }
    ];

    return (
    <Container className='mt-2 mb-5 '>
        <div className="d-flex flex-column flex-md-row">
            <Col>
                <Container className='d-flex flex-column align-items-start'>
                    <Title color="black" style={{margin:"1.5rem 0"}}>
                        Certificados en ecoturismo y sostenibilidad
                    </Title>
                    <Parrafo>Priorizamos la naturaleza e infundamos el sentimiento de pertenencia a los nuevos viajeros</Parrafo>

                    <Container className='py-4 w-100'>
                        <CardsGrid>
                            {logos.map((element) => (
                                <StyledImg key={element.id} src={element.logo} alt={element.text} />
                            ))}
                        </CardsGrid>
                    </Container>
                </Container>
            </Col>

            <Col>

                <FormContainer bgImage={IMAGES_URLS.FORMBACKGROUND}>

                    <Title color="white">
                        Te llamamos gratis
                    </Title>
                    <h5 style={{margin:"1.5rem 0", color:"white"}}>Por favor llena el formulario para poderte contactar gratis!</h5>



                    <Form className='text-white'>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type='email' placeholder='Ingresa tu correo electrónico' />
                            <Form.Text className='text-white'>
                                Jamás compartiremos tu correo electrónico con nadie.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicText'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' placeholder='Ingresa tu nombre' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicText'>
                            <Form.Label>Número de teléfono</Form.Label>
                            <Form.Control type='text' placeholder='Ingresa el mejor número de teléfono' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Autorizo enviar datos.' />
                        </Form.Group>

                        <ButtonCont>
                            <Button 
                            color='black'
                            tipo='submit'
                            text="Te llamamos"
                            onClick={handleShow}
                            />
                        </ButtonCont>

                    </Form>

                </FormContainer>
            </Col>
        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal de prueba del form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                I will not close if you click outside me. Do not even try to press escape key.
            </Modal.Body>

            <Modal.Footer>
                <ButtonCont>
                    <Button 
                    color='black'
                    tipo='submit'
                    text="Entiendo"
                    onClick={handleClose}
                    />
                </ButtonCont>
            </Modal.Footer>
        </Modal>
    
    </Container>)
}

export default FormSection

const FormContainer = styled.div`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`
const ButtonCont = styled.div`
    width: 50%;
    height: auto;
`
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; /* espacio vertical y horizontal */
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
const Parrafo = styled.h5`
    margin: 1.5rem 0;
    @media (max-width: 768px) {
        text-align: center;
    }
`
const StyledImg = styled.img`

    @media (max-width: 768px) {
        width: 100px;
        height: auto;
    }
`