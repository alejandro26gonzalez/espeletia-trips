import {
    FloatingContainer,
    SocialItem,
    SocialIcon,
    SocialCard,
    SocialTitle,
    SocialSubtitle
} from "./FloatingSocialBar.styles";
import { FiChevronUp } from "react-icons/fi";
import useScrollingTop from '../../hooks/useScrollingTop';
import scrollToTop from '../../helpers/scrollToTop'


import { socialLinks } from "./FloatingSocialBar.data";

const FloatingSocialBar = () => {

    const isScrolled = useScrollingTop(300);

    const actions = [...(
        isScrolled ? [{
            id: "Volver arriba",
            title: "Volver arriba",
            subtitle: "Ir al inicio",
            icon: FiChevronUp,
            color: "#8DBB42",
            onClick: scrollToTop
        }]
        : []
    ), ...socialLinks];

    const handleClick = (e, social) => {
        if (social.onClick) {
            e.preventDefault();
            social.onClick();
        }
    }
    
    return (
        <FloatingContainer>
            {actions.map((social) => {
                const Icon = social.icon;

                return (
                    <SocialItem
                        key={social.id}
                        href={social.href || "#"}
                        target={social.href ? "_blank" : undefined}
                        rel={social.href ? "noopener noreferrer" : undefined}
                        aria-label={social.title}
                        onClick={(e) => handleClick(e, social)}

                    >
                        <SocialIcon $color={social.color}>
                            <Icon />
                        </SocialIcon>

                        <SocialCard $color={social.color}>
                            <SocialTitle $color={social.color}>
                                {social.title}
                            </SocialTitle>

                            <SocialSubtitle>
                                {social.subtitle}
                            </SocialSubtitle>
                        </SocialCard>
                    </SocialItem>
                );
            })}
        </FloatingContainer>
    );
};

export default FloatingSocialBar;
