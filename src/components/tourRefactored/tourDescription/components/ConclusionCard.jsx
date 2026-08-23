import { FiMessageCircle } from "react-icons/fi";

import {
    ConclusionCardContainer,
    QuoteIcon,
    ConclusionText
} from "./ConclusionCard.styles";

const ConclusionCard = ({ children }) => {

    return (
        <ConclusionCardContainer>

            <QuoteIcon>
                <FiMessageCircle />
            </QuoteIcon>

            <ConclusionText>
                {children}
            </ConclusionText>

        </ConclusionCardContainer>
    );
};

export default ConclusionCard;