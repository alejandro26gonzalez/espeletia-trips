import {
    CTASectionContainer,
    CTAOverlay,
    CTAContent,
    CTATitle,
    CTADescription,
    CTAButton
} from "./CTASection.styles";

import { useTranslation } from "react-i18next";

const CTASection = ({ data }) => {

    const {t} = useTranslation("about");

    return (
        <CTASectionContainer $background={data.image}>

            <CTAOverlay />

            <CTAContent>

                <CTATitle>
                    {t(data.titleKey)}
                </CTATitle>

                <CTADescription>
                    {t(data.descriptionKey)}
                </CTADescription>

                <CTAButton href={data.button.href}>
                    {t(data.button.textKey)}
                </CTAButton>

            </CTAContent>

        </CTASectionContainer>
    );
};

export default CTASection;