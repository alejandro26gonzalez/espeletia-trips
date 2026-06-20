import styled from "styled-components";

const SubTitle = ({color, children}) => {
    return <TitleComp color={color}>{children}</TitleComp>
}

export default SubTitle

const TitleComp = styled.h2`
    font-size: 2rem;    color: ${(props) => props.color};
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
    }
`
