import {
    HeroContainer,
    HeroOverlay,
    HeroContent,
    HeroBadge,
    HeroTitle,
    HeroHighlight,
    HeroDescription,
    ContactInfoContainer,
    ContactCard,
    ContactIcon,
    ContactText,
    ContactLabel,
    ContactValue
} from "./ContactHero.styles";

import { heroContactInfo } from "../Contact.data";

const ContactHero = () => {
    return (
        <HeroContainer>

            <HeroOverlay />

            <HeroContent>

                <HeroBadge>
                    CONTACTO
                </HeroBadge>

                <HeroTitle>
                    ¿Aún necesitas
                    <HeroHighlight>
                        ayuda?
                    </HeroHighlight>
                </HeroTitle>

                <HeroDescription>
                    Estamos aquí para ti. Escríbenos, llámanos o visítanos.
                    Con gusto te ayudaremos a planear tu próxima aventura.
                </HeroDescription>

                <ContactInfoContainer>

                    {heroContactInfo.map((item) => (
                        <ContactCard key={item.id}>

                            <ContactIcon>
                                <item.icon />
                            </ContactIcon>

                            <ContactText>

                                <ContactLabel>
                                    {item.label}
                                </ContactLabel>

                                <ContactValue>
                                    {item.value}
                                </ContactValue>

                            </ContactText>

                        </ContactCard>
                    ))}

                </ContactInfoContainer>

            </HeroContent>

        </HeroContainer>
    );
};

export default ContactHero;