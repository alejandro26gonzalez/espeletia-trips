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

const Accordion = ({
    item,
    defaultOpen = false
}) => {

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
                    {item.title}
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
                            item.content?.map((text,index)=>(
                                <Paragraph key={index}>
                                    {text}
                                </Paragraph>
                            ))
                        }

                        {
                            item.note && (
                                <Note>
                                    {item.note}
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