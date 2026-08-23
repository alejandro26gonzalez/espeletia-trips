import { FiChevronDown, FiCheck } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../../../config/pages/allTours/allTours";

import {
    PriceCardContainer,
    DetailsButton,
    DetailsIcon,
    DetailsPopover,
    DetailsHeader,
    DetailsTitle,
    DetailsClose,
    DetailsGroup,
    DetailsLabel,
    DetailsValue,
    IncludesList,
    IncludeItem
} from "./DetailCard.styles";

const DetailCard = ({ data, toggleDetails, showDetails, detailsRef }) => {

    const {t} = useTranslation("tour");

    return (

        <PriceCardContainer>

            {/* Contenido normal de la tarjeta */}

            <DetailsButton
                type="button"
                onClick={toggleDetails}
                $open={showDetails}
                aria-expanded={showDetails}
            >
                {t(toursDetailPlainConfig.pricesCard.details.buttonKey)}
                <DetailsIcon $open={showDetails}>
                    <FiChevronDown />
                </DetailsIcon>

            </DetailsButton>


            {showDetails && (
                <DetailsPopover ref={detailsRef}>
                    <DetailsHeader>
                        <DetailsTitle>
                            {t(toursDetailPlainConfig.pricesCard.details.popTitleKey)}
                        </DetailsTitle>

                        <DetailsClose
                            type="button"
                            onClick={toggleDetails}
                            aria-label={t(toursDetailPlainConfig.pricesCard.details.closePopKey)}
                        >
                            ×
                        </DetailsClose>
                    </DetailsHeader>


                    <DetailsGroup>

                        <DetailsLabel>
                            {t(toursDetailPlainConfig.pricesCard.details.groupLabelkey)}
                        </DetailsLabel>

                        <DetailsValue>
                            {t(data.groupInfo)}
                        </DetailsValue>

                    </DetailsGroup>


                    <DetailsGroup>
                        <DetailsLabel>
                            {t(toursDetailPlainConfig.pricesCard.details.experLabelKey)}
                        </DetailsLabel>

                        <DetailsValue>
                            {t(data.privateInfo)}
                        </DetailsValue>
                    </DetailsGroup>

                    <DetailsGroup>

                        <DetailsLabel>
                            {t(toursDetailPlainConfig.pricesCard.details.incluyeLabelKey)}
                        </DetailsLabel>

                        <IncludesList>

                            {data.includes.map(
                                (item, index) => (

                                    <IncludeItem key={index}>
                                        <FiCheck />
                                        <span>
                                            {t(item)}
                                        </span>
                                    </IncludeItem>
                                )
                            )}
                        </IncludesList>
                    </DetailsGroup>
                </DetailsPopover>
            )}
        </PriceCardContainer>
    );
};

export default DetailCard;