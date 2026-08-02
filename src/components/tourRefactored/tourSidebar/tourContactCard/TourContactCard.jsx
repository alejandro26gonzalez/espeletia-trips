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

import {
    FiPhone,
    FiMail,
    FiClock
} from "react-icons/fi";

const TourContactCard = () => {

    const phoneNumber = "573170566675";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hola, quiero más información, mi nombre es .`
)}`;

    return (

        <Card>

            <Header>

                <Title>
                    ¿Necesitas ayuda?
                </Title>

                <Subtitle>
                    Nuestro equipo está listo para ayudarte antes de reservar tu aventura.
                </Subtitle>

            </Header>

            <ContactList>

                <ContactItem>

                    <ContactIcon>
                        <FiPhone />
                    </ContactIcon>

                    <ContactContent>

                        <ContactLabel>
                            Teléfono
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
                            Correo
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
                            Horario
                        </ContactLabel>

                        <ContactValue>
                            Lun - Dom: 8:00 a.m. - 8:00 p.m.
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

                Hablar por WhatsApp

            </WhatsAppButton>

        </Card>

    );

};

export default TourContactCard;