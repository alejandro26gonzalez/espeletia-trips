import {
    Section,
    Header,
    Title,
    Intro,
    Content,
    HighlightGrid,
    HighlightItem,
    HighlightIcon,
    HighlightText
} from "./TourDescription.styles";

import { FiCheckCircle } from "react-icons/fi";

const TourDescription = ({ description }) => {

    return (

        <Section>

            <Header>

                <Title>

                    Sobre esta experiencia

                </Title>

            </Header>

            <Intro>

                {description.introduction}

            </Intro>

            <Content>

                {description.content}

            </Content>

            <HighlightGrid>

                {

                    description.highlights.map((item,index)=>(

                        <HighlightItem
                            key={index}
                        >

                            <HighlightIcon>

                                <FiCheckCircle/>

                            </HighlightIcon>

                            <HighlightText>

                                {/* arreglar */}

                                <p>{item.title}</p>
                                

                            </HighlightText>

                        </HighlightItem>

                    ))

                }

            </HighlightGrid>

        </Section>

    );

};

export default TourDescription;