import PropTypes from "prop-types";

import {
    Card,
    CardHeader,
    IconWrapper,
    Content,
    Title,
    Badge,
    Description,
} from "./SummaryCard.styles";

const SummaryCard = ({
    icon: Icon,
    title,
    badge,
    color,
    description,
}) => {
    return (
        <Card>

            <CardHeader>

                <IconWrapper $color={color}>
                    <Icon />
                </IconWrapper>

                <Content>

                    <Title>
                        {title}
                    </Title>

                    <Badge $color={color}>
                        {badge}
                    </Badge>

                </Content>

            </CardHeader>

            <Description>

                {description}

            </Description>

        </Card>
    );
};

SummaryCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SummaryCard;