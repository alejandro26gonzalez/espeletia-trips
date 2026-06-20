import NavBar from "../components/NavbarComponent"
import styled from "styled-components"
import Title from "../components/Title"
import SubTitle from "../components/Subtitle"
import Container from 'react-bootstrap/Container';
import useBreakpoint from "../hooks/useBreakpoint";
import MobileSidebar from "../components/Mobilesidebar";
import { IMAGES_URLS } from "../constants/images";

const About = () => {

    const isResponsive = useBreakpoint("(max-width: 768px)");

    console.log(isResponsive)

    return (
        <ContainerGlobal>

            {isResponsive ? <MobileSidebar /> : <></> }

            <NavBar colorNavbar="white"/>

            <Body>
                <Title 
                color="black"
                >
                    Acerca de nosotros
                </Title>

                <div className="subCont" style={{margin:"1.5rem 0"}}>
                    <SubTitle
                    color="black"
                    >
                        Somos Espeletia Trips - Agencia de Turismo
                    </SubTitle>
                </div>

            </Body>
            <Description>

                <DescriptionText>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                </DescriptionText>

            </Description>

            <SecondSection>
                <FinalText className="d-flex flex-column p-2 justify-content-center">
                    <h2 style={{marginBottom:"1.5rem"}}>Conexión con la naturaleza</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </FinalText>

                <GrayContainer>
                    <TopRow>
                        <LargeImage src={IMAGES_URLS.FONDO1} alt="Paisaje 1"/>
                        <SmallImage src={IMAGES_URLS.FONDO2} alt="Paisaje 2"/>
                    </TopRow>

                    <BottomRow>
                        <BottomImage src={IMAGES_URLS.FONDO3} alt="Paisaje 3"/>
                    </BottomRow>
                </GrayContainer>

            </SecondSection>

        </ContainerGlobal>
    )
}

export default About

const DescriptionText = styled.div`
    width: 85%;
`
const Description = styled.div`
    width: 100%;
    background: linear-gradient(to right, #859398, #283048);
    padding: 2rem 0;
    margin: 3rem 0;
    color: white;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 0.8rem ;
    }    
`
const ContainerGlobal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`
const Body = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
`
const SecondSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: fit-content;
    margin: 3rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        font-size: 0.8rem
    }
`
const FinalText = styled(Container)`
    width: 35%;
    @media (max-width: 768px) {
        width: 80%;
        margin: 1rem;
    }
`
const GrayContainer = styled.div`
  width: 45%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const TopRow = styled.div`
  width: 90%;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
`;
const BottomRow = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
const ImageBase = styled.img`
  border-radius: 20px;
  object-fit: cover;
  display: block;
`;
/* Imagen superior izquierda (más grande) */
const LargeImage = styled(ImageBase)`
  width: 60%;
  height: 280px;
`;
/* Imagen superior derecha (más pequeña) */
const SmallImage = styled(ImageBase)`
  width: 35%;
  height: 220px;
  align-self: flex-end;
`;
/* Imagen inferior (grande y centrada) */
const BottomImage = styled(ImageBase)`
  width: 70%;
  height: 380px;

  @media (max-width: 768px) {
    display: none;
  }
`;

