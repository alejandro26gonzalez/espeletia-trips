import Accordion from "./Accordion/Accordion";

import {
    Section,
    Header,
    Title,
    Description,
    AccordionContainer
} from "./PrivacyContent.styles";
import { useTranslation } from "react-i18next";

const PrivacyContent = ({ data }) => {
    const {t} = useTranslation("privacy");

    return (

        <Section>
            <Header>
                <Title>
                    {t(data.title)}
                </Title>

                <Description>
                    {t(data.description)}
                </Description>
            </Header>

            <AccordionContainer>
                {
                    data.sections.map((section,index)=>(
                        <Accordion
                            key={index}
                            item={section}
                            defaultOpen={index===0}
                        />
                    ))
                }
            </AccordionContainer>
        </Section>
    );
};

export default PrivacyContent;