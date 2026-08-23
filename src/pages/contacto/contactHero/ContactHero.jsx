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
import { useTranslation, Trans } from "react-i18next";
import { ContactConfig } from "../../../config/pages/contact/contactConfig";

const ContactHero = () => {
    
    const{t} = useTranslation("reachUs");

    return (
        <HeroContainer>

            <HeroOverlay />

            <HeroContent>

                <HeroBadge>
                    {t(ContactConfig.heroPlainTextConfig.badgeKey)}
                </HeroBadge>

                <HeroTitle>
                    <Trans 
                    ns="reachUs"
                    i18nKey={ContactConfig.heroPlainTextConfig.titleKey}
                    components={[
                        <HeroHighlight />
                    ]}
                    />
                </HeroTitle>

                <HeroDescription>
                    {t(ContactConfig.heroPlainTextConfig.descriptionKey)}
                </HeroDescription>

                <ContactInfoContainer>

                    {ContactConfig.heroContactInfoConfig.map((item) => (
                        <ContactCard key={item.id}>

                            <ContactIcon>
                                <item.icon />
                            </ContactIcon>

                            <ContactText>

                                <ContactLabel>
                                    {t(item.labelKey)}
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