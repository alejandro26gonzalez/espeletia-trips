import {
    CTASectionContainer,
    CTAOverlay,
    CTAContent,
    CTATitle,
    CTADescription,
    CTAButton
} from "./CTASection.styles";

const CTASection = ({ data }) => {
    return (
        <CTASectionContainer $background={data.image}>

            <CTAOverlay />

            <CTAContent>

                <CTATitle>
                    {data.title}
                </CTATitle>

                <CTADescription>
                    {data.description}
                </CTADescription>

                <CTAButton href={data.button.href}>
                    {data.button.text}
                </CTAButton>

            </CTAContent>

        </CTASectionContainer>
    );
};

export default CTASection;