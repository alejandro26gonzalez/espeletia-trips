import { BackgroundImage } from "./heroStyles/hero.styles";
import IMAGES from "../../assets/images";

const HeroBackground = () => {

    const heroImage = IMAGES.componentes.ctaFinale;

    return (

        <BackgroundImage
            src={heroImage}
            alt="Paisaje del páramo"
        />

    );

};

export default HeroBackground;