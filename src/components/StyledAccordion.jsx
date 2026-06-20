import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';

const StyledAccordion = ({array = []}) => {
    return (
    <AccordionStyled>
        {array.map((element) => (
            <Accordion.Item 
            key={element.id} 
            eventKey={String(element.id)}
            >
                <Accordion.Header>{element.question}</Accordion.Header>

                <Accordion.Body>
                    <p>{element.answer}</p>
                    {element.items && element.items.length > 0 && (
                        <ul style={{ lineHeight:"2"}}>
                            {element.items.map((item,i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </Accordion.Body>
            </Accordion.Item>
        ))}
    </AccordionStyled>)
}
export default StyledAccordion

const AccordionStyled = styled(Accordion)`
    
    width: 100%;
    margin: 2rem 0;

    .accordion-header {
        background-color: #545525;
        
        .accordion-button {
            color: white;
            font-weight: bold;
            background-color: #545525;

            &:not(.collapsed) {
                background-color: #545525;
            }

            &::after {
                filter: invert(1);
            }
        }
    }
`