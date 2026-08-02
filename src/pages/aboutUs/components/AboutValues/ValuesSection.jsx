import {
    ValuesSectionContainer,
    ValuesHeader,
    ValuesBadge,
    ValuesTitle,
    ValuesDivider,
    ValuesGrid,
    ValueCard,
    ValueIcon,
    ValueTitle,
    ValueDescription
} from "./ValuesSection.styles";

const ValuesSection = ({ values }) => {
    return (
        <ValuesSectionContainer>

            <ValuesHeader>

                <ValuesBadge>
                    {values.badge}
                </ValuesBadge>

                <ValuesTitle>
                    {values.title}
                </ValuesTitle>

                <ValuesDivider />

            </ValuesHeader>

            <ValuesGrid>

                {values.items.map((item) => {

                    const Icon = item.icon;

                    return (

                        <ValueCard key={item.id}>

                            <ValueIcon>

                                <Icon />

                            </ValueIcon>

                            <ValueTitle>

                                {item.title}

                            </ValueTitle>

                            <ValueDescription>

                                {item.description}

                            </ValueDescription>

                        </ValueCard>

                    );

                })}

            </ValuesGrid>

        </ValuesSectionContainer>
    );
};

export default ValuesSection;