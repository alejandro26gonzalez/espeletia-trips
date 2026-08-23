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

import { ContactConfig } from "../../../config/pages/contact/contactConfig";
import { useTranslation } from "react-i18next";

const ContactSection = () => {

    const {t} = useTranslation("reachUs");

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

                    <ContactForm>

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.nameKey)}
                        />

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.emailKey)}
                        />

                        <Input
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.subjectKey)}
                        />

                        <TextArea
                            rows={5}
                            placeholder={t(ContactConfig.contactFormPlainConfig.placeholdersKey.messageKey)}
                        />

                        <Checkbox>

                            <input type="checkbox" />

                            <span>
                                {t(ContactConfig.contactFormPlainConfig.checkboxKey)}
                            </span>

                        </Checkbox>

                        <SubmitButton>
                            {t(ContactConfig.contactFormPlainConfig.buttonKey)}
                        </SubmitButton>

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

        </Section>
    );
};

export default ContactSection;