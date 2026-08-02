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

const PrivacyTabs = ({
    tabs,
    activeTab,
    onChange
}) => {

    return (

        <Section>
            <Header>
                <Subtitle>
                    DOCUMENTACIÓN
                </Subtitle>

                <Title>
                    Explora la información
                </Title>

                <Description>
                    Cambia entre nuestra Política de Privacidad y los
                    Términos y Condiciones para conocer cómo protegemos
                    tu información y las reglas que rigen nuestros servicios.
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
                                    {tab.title}
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