import { useState } from "react";

import {
    PRIVACY_PAGE_DATA
} from "./data/Privacy.data";

import PrivacyHero from "./components/PrivacyHero/PrivacyHero";
import PrivacyTabs from "./components/PrivacyTabs/PrivacyTabs";
import PrivacyHighlights from "./components/PrivacyHighlights/PrivacyHighlights";
import PrivacyContent from "./components/PrivacyContent/PrivacyContent";
import TermsContent from "./components/TermsContent/TermsContent";
import PrivacySidebar from "./components/PrivacySidebar/PrivacySidebar";
import PrivacyCTA from "./components/PrivacyCTA/PrivacyCTA";
import NavbarHero from "../../components/NavbarHero/NavbarHero";

import {
    PrivacyContainer,
    PrivacyWrapper,
    ContentGrid,
    MainContent,
    Sidebar
} from "./Privacy.styles";

const Privacy = () => {

    const [activeTab, setActiveTab] = useState("privacy");

    const {
        hero,
        tabs,
        highlights,
        privacy,
        terms,
        cta
    } = PRIVACY_PAGE_DATA;



    return (

        <PrivacyContainer>
            <NavbarHero />
            <PrivacyHero
                data={hero}
            />

            <PrivacyWrapper>
                <PrivacyTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />
                <PrivacyHighlights
                    items={highlights}
                />

                <ContentGrid>
                    <MainContent>
                        {
                            activeTab === "privacy" ? (
                                <PrivacyContent
                                    data={privacy}
                                />
                            ) : (
                                <TermsContent
                                    data={terms}
                                />
                            )
                        }
                    </MainContent>

                    <Sidebar>
                        <PrivacySidebar
                            activeTab={activeTab}
                            privacy={privacy}
                            terms={terms}
                        />
                    </Sidebar>
                </ContentGrid>

                <PrivacyCTA
                    data={cta}
                />
            </PrivacyWrapper>
        </PrivacyContainer>
    );
};

export default Privacy;