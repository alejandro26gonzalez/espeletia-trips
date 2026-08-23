import {
    Card,
    Header,
    Title,
    Subtitle,
    ContactList,
    ContactItem,
    ContactIcon,
    ContactContent,
    ContactLabel,
    ContactValue,
    WhatsAppButton,
    WhatsAppIcon
} from "./TourContactCard.styles";
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../../config/pages/allTours/allTours";

import {
    FiPhone,
    FiMail,
    FiClock
} from "react-icons/fi";

const TourContactCard = () => {

    const {t} = useTranslation("tour");

    const phoneNumber = "573170566675";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hola, quiero más información, mi nombre es .`
)}`;

    return (

        <Card>

            <Header>

                <Title>
                    {t(toursDetailPlainConfig.contactCard.titleKey)}
                </Title>

                <Subtitle>
                    {t(toursDetailPlainConfig.contactCard.subtitleKey)}
                </Subtitle>

            </Header>

            <ContactList>

                <ContactItem>

                    <ContactIcon>
                        <FiPhone />
                    </ContactIcon>

                    <ContactContent>

                        <ContactLabel>
                            {t(toursDetailPlainConfig.contactCard.labels.phoneKey)}
                        </ContactLabel>

                        <ContactValue>
                            +57 317 530 1103
                            <br />
                            +57 317 056 6675
                        </ContactValue>

                    </ContactContent>

                </ContactItem>

                <ContactItem>

                    <ContactIcon>
                        <FiMail />
                    </ContactIcon>

                    <ContactContent>

                        <ContactLabel>
                            {t(toursDetailPlainConfig.contactCard.labels.emailKey)}
                        </ContactLabel>

                        <ContactValue>
                            espeletia.trips@gmail.com
                        </ContactValue>

                    </ContactContent>

                </ContactItem>

                <ContactItem>

                    <ContactIcon>
                        <FiClock />
                    </ContactIcon>

                    <ContactContent>

                        <ContactLabel>
                            {t(toursDetailPlainConfig.contactCard.labels.hoursKey)}
                        </ContactLabel>

                        <ContactValue>
                            {t(toursDetailPlainConfig.contactCard.labels.daysKey)}
                        </ContactValue>

                    </ContactContent>

                </ContactItem>

            </ContactList>

            <WhatsAppButton
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsAppIcon />
                {t(toursDetailPlainConfig.contactCard.buttonKey)}
            </WhatsAppButton>

        </Card>

    );

};

export default TourContactCard;