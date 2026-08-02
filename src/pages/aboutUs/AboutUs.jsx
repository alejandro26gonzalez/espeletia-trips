import {
    AboutContainer,
    AboutBackground,
    SectionContainer
} from "./AboutUs.styles";

import {
    aboutHero,
    aboutStory,
    values,
    cta
} from "./AboutUs.data";

import NavBar from '../../components/NavbarHero/NavbarHero';

import HeroSection from "./components/AboutHero/HeroSection";
import StorySection from "./components/AboutSection/StorySection";
import ValuesSection from "./components/AboutValues/ValuesSection";
import CTASection from "./components/AboutCTA/CTASection";

const AboutUs = () => {
    return (
        <AboutContainer>

            <NavBar />

            <AboutBackground />

            <HeroSection
                data={aboutHero}
            />
            <SectionContainer>


                <StorySection
                    data={aboutStory}
                />

                <ValuesSection
                    values={values}
                />

                <CTASection
                    data={cta}
                />

            </SectionContainer>

        </AboutContainer>
    );
};

export default AboutUs;