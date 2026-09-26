
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

import { contactCertificationConfig } from "../../config/components/contact";
import { useTranslation, Trans } from "react-i18next";

import { useContactForm } from "../../hooks/useContactForm";
import SuccessModal from './SuccessModal';
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactCertification = () => {

    const { t } = useTranslation("contact");

    const {
        formData,
        loading,
        showModal,
        handleChange,
        handleSubmit,
        closeModal,
        handleCaptchaVerify
    } = useContactForm();


    return (
        <Section>
            <Container>
                <LeftColumn>
                    <Badge>
                        <BsLeafFill />
                        <span>
                            {t(contactCertificationConfig.titlesConfig.badge)}
                        </span>
                    </Badge>

                    <Title>

                        <Trans 
                            ns="contact"
                            i18nKey={contactCertificationConfig.titlesConfig.title}
                            components={[
                                <Highlight />
                            ]}
                        />

                    </Title>

                    <Description>

                        <Trans 
                            ns="contact"
                            i18nKey={contactCertificationConfig.titlesConfig.title_description}
                            components={[
                                <strong />
                            ]}
                        />

                    </Description>

                    <FeaturesGrid>

                        {contactCertificationConfig.certificationsConfig.map((item) => {

                            const Icon = item.icon;

                            return (

                                <FeatureCard key={item.title}>
                                    <IconWrapper>
                                        < Icon />
                                    </IconWrapper>

                                    <div>
                                        <FeatureTitle>
                                            {t(item.title)}
                                        </FeatureTitle>

                                        <FeatureText>
                                            {t(item.description)}
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
                            <Trans 
                                ns="contact"
                                i18nKey={contactCertificationConfig.titlesConfig.form_title}
                                components={[
                                    <Accent />
                                ]}
                            />
                        </FormTitle>

                        <FormDescription>
                            <Trans 
                                ns="contact"
                                i18nKey={contactCertificationConfig.titlesConfig.form_description}
                                components={[
                                    <Accent />
                                ]}
                            />
                        </FormDescription>

                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Label>
                                    {t(contactCertificationConfig.titlesConfig.email_label)}
                                </Label>

                                <Input
                                    type="email"
                                    name="email"
                                    placeholder={t(contactCertificationConfig.titlesConfig.email_place)}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <Label>
                                    {t(contactCertificationConfig.titlesConfig.name_label)}
                                </Label>

                                <Input
                                    type="text"
                                    name="name"
                                    placeholder={t(contactCertificationConfig.titlesConfig.name_place)}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <Label>
                                    {t(contactCertificationConfig.titlesConfig.phone_label)}
                                </Label>

                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder={t(contactCertificationConfig.titlesConfig.phone_place)}
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
                                    {t(contactCertificationConfig.titlesConfig.checkbox)}
                                </CheckboxText>
                            </CheckboxContainer>

                            <HCaptcha 
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                            reCaptchaCompat={false}
                            onVerify={handleCaptchaVerify}
                            />

                            <Button
                                type="submit"
                                disabled={status === "loading"}
                            >
                                <ButtonIcon>
                                    <FiPhone />
                                </ButtonIcon>

                                {loading 
                                ? t(contactCertificationConfig.titlesConfig.submt_1) 
                                : t(contactCertificationConfig.titlesConfig.submt_2)
                                }
                            </Button>
                        </Form>
                    </Overlay>
                </RightColumn>
            </Container>
            
            
            <SuccessModal
                open={showModal}
                onClose={closeModal}
                title={t(contactCertificationConfig.titlesConfig.success_1)}
                description={t(contactCertificationConfig.titlesConfig.success_2)}
            />

        </Section>
    );
};

export default ContactCertification;