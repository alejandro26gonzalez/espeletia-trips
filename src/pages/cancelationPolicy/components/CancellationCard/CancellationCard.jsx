import PropTypes from "prop-types";

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
} from "./CancellationCard.styles";

const CancellationCard = ({
    title,
    content,
}) => {
    return (
        <Card>

            <CardHeader>

                <CardTitle>
                    {title}
                </CardTitle>

            </CardHeader>

            <CardBody>

                {content}

            </CardBody>

        </Card>
    );
};

CancellationCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default CancellationCard;