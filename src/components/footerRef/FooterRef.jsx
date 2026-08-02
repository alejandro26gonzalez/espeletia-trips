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

import { footerData } from "./FooterRef.data";

const Footer = () => {

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
                                src={footerData.brand.logo}
                                alt="Espeletia Trips"
                            />

                            <LogoTitle>Espeletia</LogoTitle>

                            <LogoSubtitle>Trips</LogoSubtitle>

                        </BrandHeader>

                        <BrandDescription>

                            {footerData.brand.description}

                        </BrandDescription>

                        <ResponsibleSeal
                            src={footerData.brand.responsibleSeal}
                            alt="Turismo Responsable"
                        />

                    </BrandColumn>

                    {/* =========================
                        EXPLORA
                    ========================= */}

                    <FooterColumn>

                        <FooterTitle>

                            Explora

                        </FooterTitle>

                        <FooterList>

                            {footerData.exploreLinks.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <FooterItem key={item.title}>

                                        <FooterLink href={item.href}>

                                            <Icon />

                                            {item.title}

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

                            Información de contacto

                        </FooterTitle>

                        {

                            footerData.contactInfo.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <ContactItem key={item.label}>

                                        <ContactIcon>

                                            <Icon />

                                        </ContactIcon>

                                        <ContactContent>

                                            <strong>

                                                {item.label}

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

                            Síguenos

                        </FooterTitle>

                        <SocialLinks>

                            {

                                footerData.socialLinks.map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <SocialButton
                                            key={item.title}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >

                                            <Icon />

                                            <div>

                                                <strong>

                                                    {item.title}

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

                        © 2026 Espeletia Trips Murillo.
                        Todos los derechos reservados.

                    </Copyright>

                    <BottomLinks>

                        {

                            footerData.bottomLinks.map((item) => (

                                <FooterLink
                                    key={item.title}
                                    href={item.href}
                                >

                                    {item.title}

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