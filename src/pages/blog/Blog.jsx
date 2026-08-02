import BlogComingSoon from "./components/BlogComingSoon/BlogComingSoon";
import NavbarHero from "../../components/NavbarHero/NavbarHero";

import {
    BlogContainer,
    BlogWrapper
} from "./Blog.styles";

const Blog = () => {

    return (

        <BlogContainer>

            <NavbarHero variant="solid"/>

            <BlogWrapper>

                <BlogComingSoon />

            </BlogWrapper>

        </BlogContainer>

    );

};

export default Blog;