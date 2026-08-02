import styled from "styled-components";
import GlobalContainer from "../../components/GlobalContainer";
import NavbarHero from "../../components/NavbarHero/NavbarHero";
import TopHero from '../../components/topHero/TopHero';
import CertificateSectionRefactored from "../../components/certificateSection/CertificateSectionRefactored";
import DestinationSection from "../../components/destinationSection/DestinationSection";
import AdditionalServices from '../../components/additionalServices/AdditionalServices';
import VideoCTARefactored from "../../components/videoCTAsection/VideoCTARefactored";
import TestimonialSection from '../../components/testimonios/TestimonialSection';
import ContactCertification from "../../components/contactCertification/ContactCertification";
import Hero from '../../components/hero/Hero';

const Home = () => {

    return (
        <GlobalContainer>

            <NavbarHero />
            
            <TopHero />

            <CertificateSectionRefactored />

            <DestinationSection />

            <InvisibleSepatator />

            <AdditionalServices />

            <InvisibleSepatator />

            <VideoCTARefactored />

            <TestimonialSection />

            < InvisibleSepatator/>

            <ContactCertification />

            <InvisibleSepatator />

            <Hero />
        
        </GlobalContainer>
    )
}

export default Home;

const InvisibleSepatator = styled.div`
    width: 100%;
    height: 100px;
`;