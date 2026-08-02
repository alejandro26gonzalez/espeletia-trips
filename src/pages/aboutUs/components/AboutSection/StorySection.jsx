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

const StorySection = ({ data }) => {
    return (
        <StorySectionContainer>

            <StoryGrid>

                <StoryImageWrapper>

                    <StoryImage
                        src={data.image}
                        alt={data.title}
                        loading="lazy"
                    />

                </StoryImageWrapper>

                <StoryContent>

                    <StoryBadge>
                        {data.badge}
                    </StoryBadge>

                    <StoryTitle>
                        {data.title}
                    </StoryTitle>

                    <StoryDivider />

                    <StoryDescription>
                        {data.description}
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

                                        {item.label}

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