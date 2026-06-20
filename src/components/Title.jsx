import styled from "styled-components";

const Title = ({color, children}) => {
    return <TitleComp color={color}>{children}</TitleComp>
}

export default Title

const TitleComp = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.color};
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`


