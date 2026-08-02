
import { FiPhone } from "react-icons/fi";
import { BsLeafFill } from "react-icons/bs";

import {
    Section,
    Container,

    LeftColumn,
    Badge,
    Title,
    Highlight,
    Description,

    FeaturesGrid,
    FeatureCard,
    IconWrapper,
    FeatureTitle,
    FeatureText,

    RightColumn,
    Overlay,
    FormTitle,
    Accent,
    FormDescription,

    Form,
    Label,
    Input,
    CheckboxContainer,
    Checkbox,
    CheckboxText,

    Button,
    ButtonIcon,

} from "./ContactCertification.styles";

import { certifications } from "./ContactCertification.data";

import { useContactForm } from "../../hooks/useContactForm";
import SuccessModal from './SuccessModal';

const ContactCertification = () => {

    const {
        formData,
        loading,
        showModal,
        handleChange,
        handleSubmit,
        closeModal,
    } = useContactForm();


    return (
        <Section>

            <Container>

                <LeftColumn>

                    <Badge>

                        <BsLeafFill />

                        <span>
                            COMPROMISO QUE NOS CERTIFICA
                        </span>

                    </Badge>

                    <Title>

                        Certificados en

                        <Highlight>
                            ecoturismo y sostenibilidad
                        </Highlight>

                    </Title>

                    <Description>

                        Priorizamos la naturaleza e infundamos el sentimiento
                        de <strong>pertenencia</strong> a los nuevos viajeros.

                    </Description>

                    <FeaturesGrid>

                        {certifications.map((item) => {

                            const Icon = item.icon;

                            return (

                                <FeatureCard key={item.title}>

                                    <IconWrapper>

                                        < Icon />

                                    </IconWrapper>

                                    <div>

                                        <FeatureTitle>
                                            {item.title}

                                        </FeatureTitle>

                                        <FeatureText>
                                            {item.description}
                                        </FeatureText>

                                    </div>

                                </FeatureCard>

                            )
                        })}

                    </FeaturesGrid>

                </LeftColumn>

                <RightColumn>

                    <Overlay>

                        <FormTitle>

                            Te llamamos <Accent>gratis</Accent>

                        </FormTitle>

                        <FormDescription>

                            Por favor llena el formulario para poderte
                            contactar <Accent>gratis.</Accent>

                        </FormDescription>

                        <Form onSubmit={handleSubmit}>

                            <div>

                                <Label>
                                    Correo electrónico
                                </Label>

                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div>

                                <Label>
                                    Nombre
                                </Label>

                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Ingresa tu nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div>

                                <Label>
                                    Número de teléfono
                                </Label>

                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Ingresa el mejor número de teléfono"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <CheckboxContainer>

                                <Checkbox
                                    type="checkbox"
                                    name="authorize"
                                    checked={formData.authorize}
                                    onChange={handleChange}
                                    required
                                />

                                <CheckboxText>
                                    Autorizo el tratamiento de mis datos personales.
                                </CheckboxText>

                            </CheckboxContainer>

                            <Button
                                type="submit"
                                disabled={loading}
                            >

                                <ButtonIcon>
                                    <FiPhone />
                                </ButtonIcon>

                                {loading ? "Enviando..." : "Te llamamos"}

                            </Button>

                        </Form>

                    </Overlay>

                </RightColumn>

            </Container>
            
            
            <SuccessModal
                open={showModal}
                onClose={closeModal}
                title="¡Gracias por tu interés!"
                description="Hemos recibido tu información correctamente. Muy pronto nos pondremos en contacto contigo."
            />

        </Section>
    );
};

export default ContactCertification;