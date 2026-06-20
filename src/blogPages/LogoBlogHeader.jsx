import styled from "styled-components"
import { IMAGES_URLS } from "../constants/images"

const LogoBlogHeader = () => {
    return (
    <>
        <LogoBlogHeaderComp src={IMAGES_URLS.BLOG_LOGO} alt="Blog background" />
    </>
    )
}
export default LogoBlogHeader

const LogoBlogHeaderComp = styled.img`
    position: absolute;
    top: 0;
    right: -80px;
    width: 500px;
    z-index: 0;
    pointer-events: none;

    @media (max-width: 768px) {
        width: 300px;
    }
`