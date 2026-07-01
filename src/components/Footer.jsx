import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Logo from "./Logo";
import { device } from '../breakpoints/breakpoints.js'
import ScrollToTop from "../hooks/ScrollToTop.jsx"
import { ICONS_URLS     }   from "../constants/iconsLinks.js";


const Footer = () => {
    return <FooterContainer>

        <ScrollToTop />
            <Mainer>

                {/* Primera columna con el logo */}
                <Columns>
                    <LogoReset to="/">
                        <Logo color="#fff" />
                        <img  src="https://res.cloudinary.com/db6hw9lcg/image/upload/v1782163978/turismo_logo_qwpf2z.png" alt="Logo turismo responsable gobierno" />
                    </LogoReset>
                </Columns>

                 {/* Segunda columna con enlaces */}
                <Columns>
                    <h3 style={{fontWeight: "500"}}>Explora</h3>
                    <Separator />
                    <List>
                        <ListItem>
                            <LinkContent to="/tours">
                                <img src={ICONS_URLS.LINK} width={30} alt="link icon" />
                                <p>Tours</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent to="/blog">
                                <img src={ICONS_URLS.LINK} width={30} alt="link icon" />
                                <p>Blog y FAQ</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent>
                                <img src={ICONS_URLS.LINK} width={30} alt="link icon" />
                                <p>Galería</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent to="/privacy">
                                <img src={ICONS_URLS.LINK} width={30} alt="link icon" />
                                <p>Aviso de privacidad</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent to="/policy">
                                <img src={ICONS_URLS.LINK} width={30} alt="link icon" />
                                <p>Política de cancelación</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent to="/about">
                                <img src={ICONS_URLS.LINK} width={30} alt="link icon" />
                                <p>Acerca de nosotros</p>
                            </LinkContent>
                        </ListItem>
                    </List>
                </Columns>

                {/* Tercera columna con enlaces */}
                <Columns>
                    <h3 style={{fontWeight: "500"}}>Información de contacto</h3>
                    <Separator />
                    <List>
                        <ListItem>
                            <LinkContent>
                                <img src={ICONS_URLS.PHONE} width={30} alt="phone icon" />
                                <p>Teléfono 1: +57 3175301103</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent>
                                <img src={ICONS_URLS.PHONE} width={30} alt="phone icon" />
                                <p>Teléfono 2: +57 3170566675</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent>
                                <img src={ICONS_URLS.LOCATION} width={30} alt="location icon" />
                                <p>Ubicación: Calle 4 # 8-5 – Galería Municipal Murillo, Tolima</p>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <LinkContent>
                                <img src={ICONS_URLS.EMAIL_BLACK} width={30} alt="email icon" />
                                <LinkStyled>Email: espeletia.trips@gmail.com</LinkStyled>
                            </LinkContent>
                        </ListItem>
                        <ListItem>
                            <SocialStyled>
                                <img src={ICONS_URLS.INSTAGRAM_BLACK} width={30} alt="instagram icon" />
                                <LinkStyled
                                href='https://www.instagram.com/espeletia.trips.murillo?utm_source=qr&igsh=MTBmaGUyaDJya3o5dg==' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Instagram @ESPELETIA.TRIPS.MURILLO</LinkStyled>
                            </SocialStyled>
                        </ListItem>
                    </List>
                </Columns>

                {/* Cuarta columna con enlaces */}
                <Columns>
                    <h3 style={{fontWeight: "500"}}>Síguenos en redes sociales</h3>
                    <Separator />
                    <List>
                        <ListItem>
                            <SocialStyled>
                                <img src={ICONS_URLS.FACEBOOK_BLACK} width={30} alt="facebook icon" />
                                <LinkStyled
                                href='https://www.facebook.com/share/1JGsDNWJzt/' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Facebook: Breyler Tours</LinkStyled>
                            </SocialStyled>
                        </ListItem>
                        <ListItem>
                            <SocialStyled>
                                <img src={ICONS_URLS.FACEBOOK_BLACK} width={30} alt="facebook icon" />
                                <LinkStyled
                                href='https://www.facebook.com/share/18CTDhNeVe/' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Facebook: Espeletia Trips Murillo</LinkStyled>
                            </SocialStyled>
                        </ListItem>
                        <ListItem>
                            <SocialStyled>
                                <img src={ICONS_URLS.INSTAGRAM_BLACK} width={30} alt="instagram icon" />
                                <LinkStyled
                                href='https://www.instagram.com/espeletia.trips.murillo?utm_source=qr&igsh=MTBmaGUyaDJya3o5dg==' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Instagram @ESPELETIA.TRIPS.MURILLO</LinkStyled>
                            </SocialStyled>
                        </ListItem>
                    </List>
                </Columns>

            </Mainer>

            <Separator />
            <Rights>
                © 2026 Espeletia Trips Murillo. Todos los derechos reservados.
            </Rights>
    </FooterContainer>
}

export default Footer;

const LogoReset = styled(NavLink)`
    text-decoration: none;
    color: white;
    background: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    img {
        width: 200px;

        @media (max-width: 768px) {
            width: 150px;  
        }
    }

    &:visited {
        color: white;
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        color: white;
    }

    &:focus {
        outline: none;
    }

    p {
        margin: 0;
    }
`
const FooterContainer = styled.footer`
    background: #545525;
    background: linear-gradient(304deg,rgba(84, 85, 37, 1) 0%, rgba(185, 187, 81, 1) 100%);
    color: #fff;
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.mobile} {
        flex-direction: column;

    }
`
const Mainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    gap: 2rem;

    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`
const Columns = styled.div`
    padding: 0.5rem;
    width: 25%;

    @media ${device.mobile} {
        width: 90%;
        text-align: left;
    }
`
const Separator = styled.hr`
    border: 0;
    height: 1px;
    background: #fff;
    margin: 0.5rem 0;
    width: 80%;
    border-radius: 5px;
`
const List = styled.ul`
    list-style: none;   
    padding: 0;
    margin: 0;
`
const ListItem = styled.li`
  margin: 1rem 0;
  width: fit-content;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  
`;
const LinkContent = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  /* 🔥 RESET */
  text-decoration: none;
  color: white;
  background: none;
  border: none;
  outline: none;

  &:visited {
    color: white;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: white;
  }

  &:focus {
    outline: none;
  }

  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Rights = styled.p`
    font-size: 0.9rem;
    margin: 1rem 0;

    @media ${device.mobile} {
        text-align: center;
        margin-bottom: 2rem;
        width: 70%;
    }
`
const SocialStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  /* 🔥 RESET */
  text-decoration: none;
  color: white;
  background: none;
  border: none;
  outline: none;

  &:visited {
    color: white;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: white;
  }

  &:focus {
    outline: none;
  }

  p {
    margin: 0;
  }
`
const LinkStyled = styled.a`
    color: white;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 10px;
        margin-right: 0px;
        gap: 0;
        width: 100%;
    }

`