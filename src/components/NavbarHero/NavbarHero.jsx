import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
    FiChevronDown,
    FiMenu,
    FiX
} from "react-icons/fi";

import {
    NavbarWrapper,
    NavbarContainer,
    Logo,
    LogoImage,
    LogoContent,
    LogoTitle,
    LogoSubtitle,
    Nav,
    NavList,
    NavListItem,
    NavItem,
    DropdownTrigger,
    DropdownArrow,
    DropdownMenu,
    DropdownItem,
    MenuButton,
    MobileOverlay,
    MobileDrawer,
    MobileNav,
    MobileNavItem,
    MobileAccordion,
    MobileAccordionHeader,
    MobileAccordionBody
} from "./navbar.styles";
import LanguageSelector from "./LanguageSelector/LanguageSelector";

import { navbarConfig } from "../../config/components/navbar";

const NavbarHero = ({
    variant = "transparent"
}) => {

    const { t } = useTranslation("navbar");

    const isSolid = variant === "solid";
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeDrawer = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(current =>
            current === id
                ? null
                : id
        );
    };

    return (

        <>

            <NavbarWrapper
                $scrolled={scrolled}
                $solid={isSolid}
            >

                <NavbarContainer
                    $scrolled={scrolled}
                    $solid={isSolid}
                >

                    <LanguageSelector />

                    <Logo
                        to="/"
                        onClick={closeDrawer}
                    >

                        <LogoImage
                            src={navbarConfig.logo}
                            alt={navbarConfig.company}
                            $scrolled={scrolled}
                            $solid={isSolid}
                        />
                        <LogoContent>

                            <LogoTitle 
                            $scrolled={scrolled}
                            $solid={isSolid}
                            >
                                ESPELETIA
                            </LogoTitle>

                            <LogoSubtitle>
                                TRIPS
                            </LogoSubtitle>

                        </LogoContent>

                    </Logo>

                    <Nav>

                        <NavList>
                            {navbarConfig.links.map((link) => (
                                <NavListItem
                                    key={link.id}
                                >
                                    {link.children ? (
                                        <>
                                            <DropdownTrigger
                                                $scrolled={scrolled}
                                                $solid={isSolid}
                                            >
                                                {t(link.labelKey)}
                                                <DropdownArrow>
                                                    <FiChevronDown />
                                                </DropdownArrow>
                                            </DropdownTrigger>

                                            <DropdownMenu 
                                            $scrolled={scrolled}
                                            $solid={isSolid}
                                            >
                                                {link.children.map((child) => (
                                                    <DropdownItem
                                                        key={child.id}
                                                        to={child.path}
                                                        $scrolled={scrolled}
                                                    >
                                                        {t(child.labelKey)}
                                                    </DropdownItem>
                                                ))}
                                            </DropdownMenu>
                                        </>
                                    ) : (
                                        <NavItem
                                            to={link.path}
                                            $scrolled={scrolled}
                                            $solid={isSolid}
                                        >
                                            {t(link.labelKey)}
                                        </NavItem>
                                    )}
                                </NavListItem>
                            ))}
                        </NavList>
                    </Nav>

                    <MenuButton
                        onClick={() => setMenuOpen(true)}
                        $solid={isSolid}
                    >
                        <FiMenu />
                    </MenuButton>
                </NavbarContainer>
            </NavbarWrapper>
            <MobileOverlay
                $open={menuOpen}
                onClick={closeDrawer}
            />
            <MobileDrawer
                $open={menuOpen}
                background={navbarConfig.background}
            >
                <MenuButton
                    onClick={closeDrawer}
                >
                    <FiX />
                </MenuButton>
                <Logo
                    to="/"
                    onClick={closeDrawer}
                >
                    <LogoImage
                        src={navbarConfig.logo}
                        alt={navbarConfig.company}
                    />
                </Logo>

                <MobileNav>
                    {navbarConfig.links.map((link) => {
                        if (!link.children) {

                            return (

                                <MobileNavItem
                                    key={link.id}
                                    to={link.path}
                                    onClick={closeDrawer}
                                >
                                    {t(link.labelKey)}
                                </MobileNavItem>
                            );
                        }
                        const isOpen =
                            openDropdown === link.id;

                        return (

                            <MobileAccordion
                                key={link.id}
                            >
                                <MobileAccordionHeader
                                    onClick={() =>
                                        toggleDropdown(link.id)
                                    }
                                >
                                    {t(link.labelKey)}
                                    <FiChevronDown />
                                </MobileAccordionHeader>
                                <MobileAccordionBody
                                    $open={isOpen}
                                >
                                    {link.children.map((child) => (
                                        <MobileNavItem
                                            key={child.id}
                                            to={child.path}
                                            onClick={closeDrawer}
                                        >
                                            {t(child.labelKey)}
                                        </MobileNavItem>
                                    ))}
                                </MobileAccordionBody>
                            </MobileAccordion>
                        );
                    })}
                </MobileNav>
            </MobileDrawer>
        </>
    );
};

export default NavbarHero;
