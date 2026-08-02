import {
    Section,
    Grid,
    FormCard,
    InfoCard,
    FormTitle,
    FormSubtitle,
    ContactForm,
    Input,
    TextArea,
    Checkbox,
    SubmitButton,
    InfoTitle,
    InfoList,
    InfoItem,
    InfoIcon,
    InfoContent,
    InfoLabel,
    InfoValue,
    SocialContainer,
    SocialButton,
    PlantDecoration
} from "./ContactSection.styles";

import { contactInfo, socialMedia } from "../Contact.data";

const ContactSection = () => {
    return (
        <Section>

            <Grid>

                <FormCard>

                    <FormTitle>
                        Escríbenos
                    </FormTitle>

                    <FormSubtitle>
                        Completa el formulario y responderemos lo antes posible.
                    </FormSubtitle>

                    <ContactForm>

                        <Input
                            placeholder="Nombre completo"
                        />

                        <Input
                            placeholder="Correo electrónico"
                        />

                        <Input
                            placeholder="Asunto"
                        />

                        <TextArea
                            rows={5}
                            placeholder="Tu mensaje"
                        />

                        <Checkbox>

                            <input type="checkbox" />

                            <span>
                                Acepto la política de privacidad y el
                                tratamiento de mis datos.
                            </span>

                        </Checkbox>

                        <SubmitButton>
                            Enviar mensaje
                        </SubmitButton>

                    </ContactForm>

                </FormCard>

                <InfoCard>

                    <InfoTitle>
                        Información de contacto
                    </InfoTitle>

                    <InfoList>

                        {contactInfo.map((item) => (

                            <InfoItem key={item.id}>

                                <InfoIcon>
                                    <item.icon />
                                </InfoIcon>

                                <InfoContent>

                                    <InfoLabel>
                                        {item.label}
                                    </InfoLabel>

                                    <InfoValue>
                                        {item.value}
                                    </InfoValue>

                                </InfoContent>

                            </InfoItem>

                        ))}

                    </InfoList>

                    <SocialContainer>

                        {socialMedia.map((item) => (

                            <SocialButton
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <item.icon />
                            </SocialButton>

                        ))}

                    </SocialContainer>

                </InfoCard>

            </Grid>

            <PlantDecoration />

        </Section>
    );
};

export default ContactSection;