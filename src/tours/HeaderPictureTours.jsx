import styled from "styled-components"

const HeaderPictureTours = ({bgImage}) => {
    return (
        <HeaderPicture bgImage={bgImage} />
    )
}

export default HeaderPictureTours

const HeaderPicture = styled.div`
    position: absolute;
    width: 100%;
    height: 400px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transition: background-image 0.8s ease-in-out;

    z-index: -1;
    top: 0;
`