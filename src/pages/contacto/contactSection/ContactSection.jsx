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

import SuccessModal from "../../../components/contactCertification/SuccessModal";
import { ContactConfig } from "../../../config/pages/contact/contactConfig";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../../../hooks/useContactForm";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactSection = () => {

    const {t} = useTranslation("reachUs");

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

            <Grid>

                <FormCard>

                    <FormTitle>
                        {t(ContactConfig.contactFormPlainConfig.titleKey)}
                    </FormTitle>

                    <FormSubtitle>
                        {t(ContactConfig.contactFormPlainConfig.subtitleKey)}
                    </FormSubtitle>

                    <ContactForm onSubmit={handleSubmit}>

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.nameKey)}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.emailKey)}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.phoneKey)}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.subjectKey)}
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        <TextArea
                            rows={5}
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.messageKey)}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <Checkbox>

                            <input 
                            type="checkbox"
                            name="authorize"
                            value={formData.authorize}
                            onChange={handleChange}
                            />

                            <span>
                                {t(ContactConfig.contactFormPlainConfig.checkboxKey)}
                            </span>

                        </Checkbox>

                        <HCaptcha 
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={handleCaptchaVerify}
                        />

                        <SubmitButton type="submit" disabled={status === "loading"}>
                            {t(ContactConfig.contactFormPlainConfig.buttonKey)}
                        </SubmitButton>

                        {loading 
                            ? "Enviando..."
                            : t(ContactConfig.contactFormPlainConfig.buttonKey)
                        }

                    </ContactForm>

                </FormCard>

                <InfoCard>

                    <InfoTitle>
                        {t(ContactConfig.contactFormPlainConfig.asideTitleKey)}
                    </InfoTitle>

                    <InfoList>

                        {ContactConfig.contactInfoConfig.map((item) => (

                            <InfoItem key={item.id}>

                                <InfoIcon>
                                    <item.icon />
                                </InfoIcon>

                                <InfoContent>

                                    <InfoLabel>
                                        {t(item.labelKey)}
                                    </InfoLabel>

                                    <InfoValue>
                                        {t(item.value)}
                                    </InfoValue>

                                </InfoContent>

                            </InfoItem>

                        ))}

                    </InfoList>

                    <SocialContainer>

                        {ContactConfig.socialMediaConfig.map((item) => (

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

            <SuccessModal
                open={showModal}
                onClose={closeModal}
                title={t(ContactConfig.contactFormPlainConfig.successModal.title)}
                description={t(ContactConfig.contactFormPlainConfig.successModal.description)}
            />

        </Section>
    );
};

export default ContactSection;