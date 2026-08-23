import {
    FileText,
    Calendar,
    Phone,
    Mail
} from "lucide-react";

import {
    SidebarContainer,
    SidebarCard,
    SidebarTitle,
    SidebarList,
    SidebarItem,
    Bullet,
    Divider,
    InfoTitle,
    InfoText,
    ContactButton,
    ContactIcon
} from "./PrivacySidebar.styles";
import { useTranslation } from "react-i18next";

const PrivacySidebar = ({
    activeTab,
    privacy,
    terms
}) => {
    const {t} = useTranslation("privacy");

    const currentData =
        activeTab === "privacy"
            ? privacy
            : terms;

    const items =
        activeTab === "privacy"
            ? privacy.sections
            : terms.cards;

    return (

        <SidebarContainer>
            <SidebarCard>
                <SidebarTitle>
                    <FileText size={18}/>
                    {t(currentData.title)}
                </SidebarTitle>

                <SidebarList>
                    {
                        items.map((item,index)=>(
                            <SidebarItem
                                key={index}
                            >
                                <Bullet/>
                                {t(item.titleKey)}
                            </SidebarItem>
                        ))
                    }
                </SidebarList>
            </SidebarCard>

            <SidebarCard>
                <InfoTitle>
                    <Calendar size={18}/>
                    {t(privacy.subCard.titleKey)}
                </InfoTitle>

                <InfoText>
                    {t(privacy.subCard.dateKey)}
                </InfoText>
            </SidebarCard>

            <SidebarCard>
                <InfoTitle>
                    {t(privacy.subCard.questionKey)}
                </InfoTitle>

                <Divider/>

                <ContactButton>
                    <ContactIcon>
                        <Phone size={18}/>
                    </ContactIcon>
                    +57 322 563 2587
                </ContactButton>

                <ContactButton>
                    <ContactIcon>
                        <Mail size={18}/>
                    </ContactIcon>
                    turismo@gmail.com
                </ContactButton>

            </SidebarCard>
        </SidebarContainer>
    );
};

export default PrivacySidebar;