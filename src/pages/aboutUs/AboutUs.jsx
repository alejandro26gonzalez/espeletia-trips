import {
    AboutContainer,
    AboutBackground,
    SectionContainer
} from "./AboutUs.styles";

import {
    aboutHeroConfig,
    aboutStoryConfig,
    valuesConfig,
    ctaConfig
} from "../../config/pages/aboutUs/aboutUsConfig";

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
                data={aboutHeroConfig}
            />
            <SectionContainer>


                <StorySection
                    data={aboutStoryConfig}
                />

                <ValuesSection
                    values={valuesConfig}
                />

                <CTASection
                    data={ctaConfig}
                />

            </SectionContainer>

        </AboutContainer>
    );
};

export default AboutUs;