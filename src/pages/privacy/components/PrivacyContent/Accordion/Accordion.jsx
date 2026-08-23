import { useState } from "react";

import {
    ChevronDown,
    Phone,
    Mail
} from "lucide-react";

import {
    AccordionWrapper,
    AccordionHeader,
    IconContainer,
    Title,
    Arrow,
    AccordionBody,
    Paragraph,
    List,
    ListItem,
    Note,
    ContactContainer,
    ContactItem
} from "./Accordion.styles";
import { useTranslation } from "react-i18next";

const Accordion = ({
    item,
    defaultOpen = false
}) => {

    const {t} = useTranslation("privacy");

    const [open, setOpen] = useState(defaultOpen);

    const Icon = item.icon;

    return (

        <AccordionWrapper
            $open={open}
        >
            <AccordionHeader
                onClick={() => setOpen(!open)}
            >
                <IconContainer>
                    <Icon size={22} />
                </IconContainer>

                <Title>
                    {t(item.titleKey)}
                </Title>

                <Arrow
                    $open={open}
                >
                    <ChevronDown size={22} />
                </Arrow>
            </AccordionHeader>

            {
                open && (
                    <AccordionBody>
                        {
                            item.contentKey?.map((text,index)=>(
                                <Paragraph key={index}>
                                    {t(text)}
                                </Paragraph>
                            ))
                        }

                        {
                            t(item.noteKey) && (
                                <Note>
                                    {t(item.noteKey)}
                                </Note>
                            )
                        }

                        {
                            item.contact && (
                                <ContactContainer>
                                    <ContactItem>
                                        <Phone size={18}/>
                                        {item.contact.phone}
                                    </ContactItem>

                                    <ContactItem>
                                        <Mail size={18}/>
                                        {item.contact.email}
                                    </ContactItem>
                                </ContactContainer>
                            )
                        }
                    </AccordionBody>
                )
            }
        </AccordionWrapper>
    );
};

export default Accordion;