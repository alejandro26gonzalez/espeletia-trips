import styled from "styled-components"

const PicTextComp = ({textos = [], imagen}) => {

    if (!imagen || !textos ) return null;
    
    return (
        <Wrapper>
            <Picture src={imagen}/>
            {textos.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
            ))}
        </Wrapper>
    );
};

export default PicTextComp;

const Picture = styled.img`
    border-radius: 15px;
    width: 100%;
    height: fit-content;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 0;
`
const Wrapper = styled.div`
    width: 100%;
`
const Paragraph = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
`;