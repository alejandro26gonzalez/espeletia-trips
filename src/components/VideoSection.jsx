import styled from "styled-components";
import Button from "../components/Button"
import { NavLink } from "react-router";
import { IMAGES_URLS } from "../constants/images";

const VideoSection = () => {
    return (
    <Container>
        <Liner>

            <Sider className="number1">
                <VideoWrapper>
                    <StyledVideo 
                        src={IMAGES_URLS.VIDEO}
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                    />
                </VideoWrapper>
            </Sider>

            <Sider className="number2">
                <TextSider>
                    <h2 style={{fontWeight:"500", margin:"2rem 0", textAlign:"center"}}>
                        Más que un viaje, una conexión profunda con la montaña, la comunidad y la naturaleza del Nevado del Ruiz.
                    </h2>
                    <Separator />
                    <Parrafo>
                        Conoce más acerca de nostros a través de nuestro blog
                    </Parrafo>
                    <ButtonCont>
                        <NavLink to="/blog">
                            <Button text="Ir al Blog"/>
                        </NavLink>
                    </ButtonCont>
                </TextSider>

            </Sider>

        </Liner>

    </Container>)
}

export default VideoSection

const Parrafo = styled.p`

    margin: 2rem 0;
    
    @media (max-width: 768px) {
        text-align: center;
        margin: 1rem 0 0 0;
        font-weight: 500;
    }
`

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover; /* llena sin deformar */
    display: block;
    padding: 1rem;
    background-color: black;
`;


const VideoWrapper = styled.div`
  width: 300px;
  aspect-ratio: 9 / 16;

  position: absolute;

  border-radius: 20px;
  overflow: hidden;

  transform: scale(1.2); /* 👈 lo hace sobresalir */
  z-index: 5;

  box-shadow: 
    rgba(0, 0, 0, 0.35) 0px 20px 40px;

    
`;


const ButtonCont = styled.div`
    width: 50%;
    position: relative;
    top: 40px; /* lo baja */
`;

const Separator = styled.hr`
    border: 0;
    height: 3px;
    background: #000;
    margin: 1rem 0;
    width: 100%;
    border-radius: 5px;
`
const Sider = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &.number1 {
    @media (max-width: 768px) {
        display: none;
    }
  }

  &.number2 {
    @media (max-width: 768px) {
        padding: 2rem;
    }
  }
`;
const Liner = styled.div`
  position: relative;
  overflow: visible; /* 👈 importante */
  width: 100%;

  display: flex;
  align-items: center; /* 👈 centra verticalmente */
  justify-content: center;
  gap: 1rem;

  padding: 2rem 0; /* espacio para que pueda sobresalir */

  background: linear-gradient(
    90deg,
    rgba(84, 85, 37, 1) 1%,
    rgba(42, 123, 155, 1) 26%,
    rgba(87, 199, 133, 1) 59%,
    rgba(239, 227, 24, 1) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
              rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
              rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`;

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 2rem;

`
const TextSider = styled(Sider)`
    max-width: 500px;
    flex-direction: column;
    text-align: left;

`;