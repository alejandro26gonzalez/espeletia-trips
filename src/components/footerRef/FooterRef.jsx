import { FiExternalLink } from "react-icons/fi";

import {
    FooterWrapper,
    FooterBackground,
    FooterOverlay,
    FooterContent,
    FooterGrid,

    LogoTitle,
    LogoSubtitle,

    BrandColumn,
    BrandHeader,
    BrandLogo,
    BrandDescription,
    ResponsibleSeal,

    FooterColumn,
    FooterTitle,

    FooterList,
    FooterItem,
    FooterLink,

    ContactItem,
    ContactIcon,
    ContactContent,

    SocialLinks,
    SocialButton,

    FooterBottom,
    Copyright,
    BottomLinks
} from "./FooterRef.styles";
import { useTranslation } from "react-i18next";

import { footerDataConfig } from "../../config/components/footer";

const Footer = () => {

    const { t } = useTranslation("footer");

    return (

        <FooterWrapper>
            <FooterBackground />
            <FooterOverlay />
            <FooterContent>
                <FooterGrid>

                    {/* =========================
                        BRAND
                    ========================= */}

                    <BrandColumn>
                        <BrandHeader>
                            <BrandLogo
                                src={footerDataConfig.brandInfoConfig.logo}
                                alt="Espeletia Trips"
                            />
                            <LogoTitle>Espeletia</LogoTitle>
                            <LogoSubtitle>Trips</LogoSubtitle>
                        </BrandHeader>

                        <BrandDescription>
                            {t(footerDataConfig.brandInfoConfig.key)}
                        </BrandDescription>

                        <ResponsibleSeal
                            src={footerDataConfig.brandInfoConfig.responsibleSeal}
                            alt="Turismo Responsable"
                        />
                    </BrandColumn>

                    {/* =========================
                        EXPLORA
                    ========================= */}

                    <FooterColumn>
                        <FooterTitle>
                            {t(footerDataConfig.columnTitlesConfig.first)}
                        </FooterTitle>

                        <FooterList>
                            {footerDataConfig.exploreLinksConfig.map((item) => {

                                const Icon = item.icon;
                                return (

                                    <FooterItem key={item.id}>
                                        <FooterLink href={item.path}>
                                            <Icon />
                                            {t(item.titleKey)}
                                        </FooterLink>
                                    </FooterItem>
                                );
                            })}
                        </FooterList>
                    </FooterColumn>

                    {/* =========================
                        CONTACTO
                    ========================= */}

                    <FooterColumn>
                        <FooterTitle>
                            {t(footerDataConfig.columnTitlesConfig.second)}
                        </FooterTitle>

                        {
                            footerDataConfig.contactInfoConfig.map((item) => {

                                const Icon = item.icon;
                                return (
                                    <ContactItem key={item.id}>
                                        <ContactIcon>
                                            <Icon />
                                        </ContactIcon>

                                        <ContactContent>
                                            <strong>
                                                {t(item.labelKey)}
                                            </strong>
                                            {

                                                Array.isArray(item.value)
                                                    ? item.value.map((line) => (
                                                        <span key={line}>
                                                            {line}
                                                        </span>
                                                    ))

                                                    : (

                                                        <span>
                                                            {item.value}
                                                        </span>
                                                    )
                                            }
                                        </ContactContent>
                                    </ContactItem>
                                );
                            })
                        }
                    </FooterColumn>

                    {/* =========================
                        REDES
                    ========================= */}

                    <FooterColumn>
                        <FooterTitle>
                            {t(footerDataConfig.columnTitlesConfig.third)}
                        </FooterTitle>

                        <SocialLinks>
                            {
                                footerDataConfig.socialLinksConfig.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <SocialButton
                                            key={item.titleKey}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon />
                                            <div>
                                                <strong>
                                                    {item.titleKey}
                                                </strong>

                                                <span>
                                                    {item.subtitle}
                                                </span>
                                            </div>
                                            <FiExternalLink />
                                        </SocialButton>
                                    );
                                })
                            }
                        </SocialLinks>
                    </FooterColumn>
                </FooterGrid>

                {/* =========================
                    FOOTER BOTTOM
                ========================= */}

                <FooterBottom>
                    <Copyright>
                        {t(footerDataConfig.columnTitlesConfig.copyright)}
                    </Copyright>

                    <BottomLinks>
                        {
                            footerDataConfig.bottomLinksConfig.map((item) => (

                                <FooterLink
                                    key={item.titleKey}
                                    href={item.href}
                                >
                                    {t(item.titleKey)}
                                </FooterLink>
                            ))
                        }
                    </BottomLinks>
                </FooterBottom>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;