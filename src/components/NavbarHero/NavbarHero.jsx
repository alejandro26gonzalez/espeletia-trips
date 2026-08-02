import { useEffect, useState } from "react";
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

import { navbarData } from "./navbar.data";

const NavbarHero = ({
    variant = "transparent"
}) => {

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

                    <Logo
                        to="/"
                        onClick={closeDrawer}
                    >

                        <LogoImage
                            src={navbarData.logo}
                            alt={navbarData.company}
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

                            {navbarData.links.map((link) => (

                                <NavListItem
                                    key={link.id}
                                >

                                    {link.children ? (

                                        <>

                                            <DropdownTrigger
                                                $scrolled={scrolled}
                                                $solid={isSolid}
                                            >

                                                {link.label}

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

                                                        {child.label}

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

                                            {link.label}

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
                background={navbarData.background}
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
                        src={navbarData.logo}
                        alt={navbarData.company}
                    />

                </Logo>

                <MobileNav>

                    {navbarData.links.map((link) => {

                        if (!link.children) {

                            return (

                                <MobileNavItem
                                    key={link.id}
                                    to={link.path}
                                    onClick={closeDrawer}
                                >

                                    {link.label}

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

                                    {link.label}

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

                                            {child.label}

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
