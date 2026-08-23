import { BackgroundImage } from "./heroStyles/hero.styles";
import IMAGES from "../../assets/images";
import { useTranslation } from "react-i18next";

const HeroBackground = () => {

    const { t } = useTranslation("hero");

    const heroImage = IMAGES.componentes.ctaFinale;

    return (

        <BackgroundImage
            src={heroImage}
            alt={t("hero_background_alt")}
        />

    );

};

export default HeroBackground;