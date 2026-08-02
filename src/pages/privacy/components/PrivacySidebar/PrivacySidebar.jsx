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

const PrivacySidebar = ({
    activeTab,
    privacy,
    terms
}) => {

    const currentData =
        activeTab === "privacy"
            ? privacy
            : terms;

    const items =
        activeTab === "privacy"
            ? privacy.sections
            : terms.cards;

    console.log({
        activeTab
    })

    return (

        <SidebarContainer>
            <SidebarCard>
                <SidebarTitle>
                    <FileText size={18}/>
                    {currentData.title}
                </SidebarTitle>

                <SidebarList>
                    {
                        items.map((item,index)=>(
                            <SidebarItem
                                key={index}
                            >
                                <Bullet/>
                                {item.title}
                            </SidebarItem>
                        ))
                    }
                </SidebarList>
            </SidebarCard>

            <SidebarCard>
                <InfoTitle>
                    <Calendar size={18}/>
                    Última actualización
                </InfoTitle>

                <InfoText>
                    Julio de 2026
                </InfoText>
            </SidebarCard>

            <SidebarCard>
                <InfoTitle>
                    ¿Necesitas ayuda?
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