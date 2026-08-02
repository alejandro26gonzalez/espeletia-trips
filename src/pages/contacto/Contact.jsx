import ContactHero from "../contacto/contactHero/ContactHero";
import ContactSection from "../contacto/contactSection/ContactSection";
import ContactFeatures from "../contacto/contactFeatures/ContactFeatures";
import ContactMap from "../contacto/contactMap/ContactMap";
import NavbarHero from '../../components/NavbarHero/NavbarHero'

import { ContactContainer } from "./Contact.styles";

const Contact = () => {
    return (
        <ContactContainer>

            <NavbarHero />

            <ContactHero />

            <ContactSection />

            <ContactFeatures />

            <ContactMap />

        </ContactContainer>
    );
};

export default Contact;