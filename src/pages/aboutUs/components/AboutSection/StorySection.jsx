import {
    StorySectionContainer,
    StoryGrid,
    StoryImageWrapper,
    StoryImage,
    StoryContent,
    StoryBadge,
    StoryTitle,
    StoryDivider,
    StoryDescription,
    StoryStatsGrid,
    StoryStatCard,
    StoryStatIcon,
    StoryStatValue,
    StoryStatLabel
} from "./StorySection.styles";

import { useTranslation } from "react-i18next";

const StorySection = ({ data }) => {

    const {t} = useTranslation("about");

    return (
        <StorySectionContainer>

            <StoryGrid>

                <StoryImageWrapper>

                    <StoryImage
                        src={data.image}
                        alt={t(data.badgeKey)}
                        loading="lazy"
                    />

                </StoryImageWrapper>

                <StoryContent>

                    <StoryBadge>
                        {t(data.badgeKey)}
                    </StoryBadge>

                    <StoryTitle>
                        {t(data.titleKey)}
                    </StoryTitle>

                    <StoryDivider />

                    <StoryDescription>
                        {t(data.descriptionKey)}
                    </StoryDescription>

                    <StoryStatsGrid>

                        {data.stats.map((item) => {
                            const Icon = item.icon;
                            return (
                                <StoryStatCard key={item.id}>
                                    <StoryStatIcon>
                                        <Icon />
                                    </StoryStatIcon>

                                    <StoryStatValue>
                                        {item.value}
                                    </StoryStatValue>

                                    <StoryStatLabel>
                                        {t(item.labelKey)}
                                    </StoryStatLabel>
                                </StoryStatCard>
                            );
                        })}
                    </StoryStatsGrid>
                </StoryContent>
            </StoryGrid>
        </StorySectionContainer>
    );
};

export default StorySection;