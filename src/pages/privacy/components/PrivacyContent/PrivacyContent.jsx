import Accordion from "./Accordion/Accordion";

import {
    Section,
    Header,
    Title,
    Description,
    AccordionContainer
} from "./PrivacyContent.styles";

const PrivacyContent = ({ data }) => {

    return (

        <Section>
            <Header>
                <Title>
                    {data.title}
                </Title>

                <Description>
                    {data.description}
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