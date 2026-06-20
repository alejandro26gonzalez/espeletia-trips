import styled from "styled-components";
import LogoBlogHeader from "../blogPages/LogoBlogHeader"
import NavBar from "../components/NavbarComponent"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BackButton from "./BackButton.jsx"
import { NavLink } from "react-router";
import useBreakpoint from "../hooks/useBreakpoint.js"
import MobileSidebar from "../components/Mobilesidebar.jsx"

const BlogLayout = ({activeBreadcrumbItem, children}) => {

    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
        <ContainerGlobal>

            {isResponsive && <MobileSidebar />}
            <LogoBlogHeader />

            <NavBar colorNavbar="white"/>

            <TitleCont>
                <StyledBreadcrumb>

                    <Breadcrumb.Item as={NavLink} to="/blog">
                        Blog
                    </Breadcrumb.Item>

                    <Breadcrumb.Item active>
                        {activeBreadcrumbItem}
                    </Breadcrumb.Item>

                </StyledBreadcrumb>

                <BackButton />

            </TitleCont>

            <ArticleContainer>

                {children}

            </ArticleContainer>

        </ContainerGlobal>
    );
};

export default BlogLayout

const ContainerGlobal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
`
const TitleCont = styled.div`
    margin: 5rem 0;
    width: 80%;
    display: flex;
    justify-content: space-between;

`
const StyledBreadcrumb = styled(Breadcrumb)`
    background: transparent;
    margin: 0;
    padding: 0;

    .breadcrumb-item a {
        text-decoration: none;
        color: black;
        font-size: 3rem;
        font-weight: 500;
        transition: color 0.3s ease;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .breadcrumb-item a:hover {
        color: #BF6969;
    }

    .breadcrumb-item.active {
        color: #999;
        font-size: 3rem;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 2rem;
            
        }
    }

    .breadcrumb-item + .breadcrumb-item::before {
        color: #999; /* Color del slash */
        font-size: 3rem;
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    

`;
const ArticleContainer = styled.div`
    width: 80%;
    min-height: 100vh;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    @media (max-width: 768px) {
        width: 90%;
    }
`