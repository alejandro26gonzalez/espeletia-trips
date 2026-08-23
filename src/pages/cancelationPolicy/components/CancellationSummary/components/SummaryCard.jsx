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
import { useTranslation } from "react-i18next";

const SummaryCard = ({
    icon: Icon,
    titleKey,
    badgeKey,
    color,
    descriptionKey,
}) => {
    const {t} = useTranslation("cancellation");

    return (
        <Card>

            <CardHeader>

                <IconWrapper $color={color}>
                    <Icon />
                </IconWrapper>

                <Content>

                    <Title>
                        {t(titleKey)}
                    </Title>

                    <Badge $color={color}>
                        {t(badgeKey)}
                    </Badge>

                </Content>

            </CardHeader>

            <Description>

                {t(descriptionKey)}

            </Description>

        </Card>
    );
};

SummaryCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    titleKey: PropTypes.string.isRequired,
    badgeKey: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    descriptionKey: PropTypes.string.isRequired,
};

export default SummaryCard;