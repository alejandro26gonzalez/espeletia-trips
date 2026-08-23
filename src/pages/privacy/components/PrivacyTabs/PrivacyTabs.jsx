import {
    Section,
    Header,
    Subtitle,
    Title,
    Description,
    Divider,
    TabsWrapper,
    TabButton,
    TabIcon,
    TabLabel
} from "./PrivacyTabs.styles";
import { useTranslation } from "react-i18next";

const PrivacyTabs = ({
    tabs,
    plainText,
    activeTab,
    onChange
}) => {
    const {t} = useTranslation("privacy");

    return (

        <Section>
            <Header>
                <Subtitle>
                    {t(plainText.subtitleKey)}
                </Subtitle>

                <Title>
                    {t(plainText.titleKey)}
                </Title>

                <Description>
                    {t(plainText.descriptionKey)}
                </Description>

                <Divider />
            </Header>

            <TabsWrapper>
                {
                    tabs.map((tab) => {
                        const Icon = tab.icon;
                        const active = activeTab === tab.id;

                        return (

                            <TabButton
                                key={tab.id}
                                $active={active}
                                onClick={() => onChange(tab.id)}
                            >

                                <TabIcon
                                    $active={active}
                                >
                                    <Icon size={22}/>
                                </TabIcon>

                                <TabLabel
                                    $active={active}
                                >
                                    {t(tab.titleKey)}
                                </TabLabel>
                            </TabButton>
                        );
                    })
                }
            </TabsWrapper>
        </Section>
    );
};

export default PrivacyTabs;