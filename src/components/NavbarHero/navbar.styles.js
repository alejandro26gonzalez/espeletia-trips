import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* ==========================================================
   NAVBAR WRAPPER
========================================================== */

export const NavbarWrapper = styled.header`
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1200;
    display: flex;
    justify-content: center;
    padding: ${({ $scrolled, $solid }) =>
        ($scrolled || $solid)
            ? "16px 24px"
            : "28px 24px"};
    transition: all .35s ease;
    pointer-events: none;
    @media (max-width:768px){
        padding:${({ $scrolled, $solid }) => ($scrolled || $solid) ? "12px 18px" : "18px"};
    }
    @media (max-width:480px){
        padding:${({ $scrolled, $solid }) => ($scrolled || $solid) ? "10px 14px" : "14px"};
    }
`;
/* ==========================================================
   CONTAINER
========================================================== */

export const NavbarContainer = styled.div`
    width:min(1320px,100%);
    box-sizing:border-box;
    min-height:${({ $scrolled, $solid }) => ($scrolled || $solid) ? "60px" : "84px"};
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 34px;
    border-radius:22px;
    pointer-events:auto;
    transition:.35s ease;
    background:${({ $scrolled, $solid })=>
        ($scrolled || $solid)
            ? `linear-gradient(
            135deg,
            rgba(255,255,255,.78),
            rgba(248,248,245,.72),
            rgba(240,247,236,.68)
        )`
            : "rgba(255,255,255,.08)"
    };
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
    border:1px solid
        ${({ $scrolled, $solid })=>
            ($scrolled || $solid)
                ? "rgba(255,255,255,.35)"
                : "rgba(255,255,255,.12)"
        };
    box-shadow:${({ $scrolled, $solid })=>
        ($scrolled || $solid)
            ? "0 12px 35px rgba(34,52,28,.08)"
            : "0 15px 45px rgba(0,0,0,.18)"
    };
    @media (max-width:992px){
        min-height:${({ $scrolled, $solid }) => ($scrolled || $solid) ? "68px" : "76px"};
        padding:0 24px;
    }
    @media (max-width:576px){
        border-radius:18px;
        min-height:${({ $scrolled, $solid }) => ($scrolled || $solid) ? "62px" : "68px"};
        padding:0 18px;
    }
`;
/* ==========================================================
   LOGO
========================================================== */
export const Logo = styled(NavLink)`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
    text-decoration:none;
`;
export const LogoImage = styled.img`
    display:block;
    width:auto;
    height:${({ $scrolled, $solid }) => ($scrolled || $solid) ? "56px" : "68px"};
    object-fit:contain;
    transition:
        transform .35s ease,
        height .35s ease;
    ${Logo}:hover &{
        transform:scale(1.04);
    }
    @media (max-width:992px){
        height:${({ $scrolled }) => $scrolled ? "52px" : "60px"};
    }
    @media (max-width:768px){
        height:${({ $scrolled }) => $scrolled ? "48px" : "54px"};
    }
    @media (max-width:576px){
        height:${({ $scrolled }) => $scrolled ? "44px" : "48px"};
    }
`;
/* ==========================================================
   LOGO CONTENT
========================================================== */

export const LogoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: .85rem;
    user-select: none;
    @media (max-width: 576px) {
        margin-left: .65rem;
    }
`;
export const LogoTitle = styled.span`
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${({ $scrolled, $solid }) =>
        ($scrolled || $solid)
            ? "#233127"
            : "#FFFFFF"};
    line-height: 1;
    transition: color .3s ease;
    @media (max-width:768px){
        font-size:1rem;
    }
    @media (max-width:576px){
        font-size:.92rem;
    }
`;
export const LogoSubtitle = styled.span`
    margin-top: .15rem;
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .45em;
    text-transform: uppercase;
    color: #D9C91D;
    line-height: 1;
    @media (max-width:768px){
        font-size:.65rem;
    }
    @media (max-width:576px){
        font-size:.6rem;
    }
`;
/* ==========================================================
   DESKTOP NAVIGATION
========================================================== */

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    margin-left:auto;
    @media (max-width:992px){
        display:none;
    }
`;
export const NavList = styled.ul`
    display:flex;
    align-items:center;
    gap:2.4rem;
    margin:0;
    padding:0;
    list-style:none;
`;
export const NavListItem = styled.li`
    position:relative;
    display:flex;
    align-items:center;
`;
/* ==========================================================
   NAV ITEM
========================================================== */

export const NavItem = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    text-decoration: none;
    font-size: 0.97rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: ${({ $scrolled, $solid }) =>
        ($scrolled || $solid) ? "#233127" : "#FFFFFF"};
    white-space: nowrap;
    transition:
        color 0.3s ease;
    &:hover {
        color: #D9C91D;
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0.45rem;
        width: 100%;
        height: 2px;
        border-radius: 999px;
        background: #D9C91D;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }
    &:hover::after {
        transform: scaleX(1);
    }
    &.active {
        color: #D9C91D;
    }
    &.active::after {
        transform: scaleX(1);
    }
    &:focus-visible {
        outline: none;
        color: #D9C91D;
    }
    &:focus-visible::after {
        transform: scaleX(1);
    }
`;
export const DropdownTrigger = styled.button`
    position:relative;
    display:flex;
    align-items:center;
    gap:.45rem;
    padding:1rem 0;
    border:none;
    background:none;
    cursor:pointer;
    font-size:.97rem;
    font-weight:600;
    letter-spacing:.02em;
    color:${({$scrolled, $solid})=>
        ($scrolled || $solid)
            ? "#233127"
            : "#FFFFFF"
    };
    transition:
        color .3s ease,
        transform .3s ease;
    &:hover{
        color:#D9C91D;
        transform:translateY(-2px);
    }
    &::after{
        content:"";
        position:absolute;
        left:0;
        bottom:.6rem;
        width:100%;
        height:2px;
        background:#D9C91D;
        border-radius:999px;
        transform:scaleX(0);
        transform-origin:left;
        transition:transform .3s ease;
    }
    &:hover::after{
        transform:scaleX(1);
    }
`;
/* ==========================================================
   DESKTOP DROPDOWN
========================================================== */

export const DropdownMenu = styled.div`
    position:absolute;
    /* Keep the panel touching its trigger so the pointer never leaves the
       parent hover area while moving to a menu item. */
    top:100%;
    left:50%;
    transform:translateX(-50%) translateY(15px);
    min-width:280px;
    padding:.75rem;
    border-radius:20px;
    opacity:0;
    visibility:hidden;
    pointer-events:none;
    z-index:100;
    transition:
        opacity .35s ease,
        transform .35s ease,
        visibility .35s ease;
    background:
        linear-gradient(
        135deg,
        rgba(255,255,255,.88),
        rgba(248,248,245,.82)
        );
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
    border:1px solid
        ${({ $scrolled, $solid })=>
            ($scrolled || $solid)
                ? "rgba(255,255,255,.30)"
                : "rgba(255,255,255,.12)"
        };
    box-shadow:${({ $scrolled })=>
        $scrolled
            ? "0 10px 30px rgba(0,0,0,.12)"
            : "0 15px 45px rgba(0,0,0,.18)"
    };
    ${NavListItem}:hover &{
        opacity:1;
        visibility:visible;
        pointer-events:auto;
        transform:
            translateX(-50%)
            translateY(0);
    }
    &::before{
    content:"";
    position:absolute;
    top:-8px;
    left:50%;
    width:16px;
    height:16px;
    transform:
        translateX(-50%)
        rotate(45deg);
    background:${({ $scrolled }) =>
        $scrolled
            ? "rgba(235, 240, 236, .96)"
            : "rgba(255,255,255,.14)"};
    border-top:1px solid ${({ $scrolled }) =>
        $scrolled ? "rgba(35,49,39,.10)" : "rgba(255,255,255,.12)"};
    border-left:1px solid ${({ $scrolled }) =>
        $scrolled ? "rgba(35,49,39,.10)" : "rgba(255,255,255,.12)"};
}
`;
export const DropdownItem = styled(NavLink)`
    display:flex;
    align-items:center;
    width:100%;
    padding:15px 18px;
    border-radius:14px;
    text-decoration:none;
    font-size:.94rem;
    font-weight:500;
    color: #233127;
    transition:
        background .3s ease,
        color .3s ease,
        padding-left .3s ease;
    &:hover{
        background:
            rgba(255,255,255,.10);
        color:#D9C91D;
        padding-left:24px;
    }
    &.active{
        color:#D9C91D;
        background:
            rgba(255,255,255,.08);
    }
`;
/* ==========================================================
   DROPDOWN ARROW
========================================================== */

export const DropdownArrow = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.15rem;
    color: inherit;
    transition:
        transform 0.3s ease,
        color 0.3s ease;
    svg {
        font-size: 1rem;
    }
    ${NavListItem}:hover & {
        transform: rotate(180deg);
    }
`;
export const MenuButton = styled.button`
    display:none;
    align-items:center;
    justify-content:center;
    width:48px;
    height:48px;
    border:none;
    border-radius:14px;
    cursor:pointer;
    background:rgba(255,255,255,.08);
    color:${({$scrolled, $solid})=>
        ($scrolled || $solid)
            ? "#233127"
            : "#FFFFFF"
    };
    transition:.3s;
    svg{
        font-size:1.6rem;
    }
    &:hover{
        background:rgba(255,255,255,.16);
    }
    @media(max-width:992px){
        display:flex;
    }
`;
export const MobileOverlay = styled.div`
    position:fixed;
    inset:0;
    z-index:1200;
    background:
        rgba(5,10,8,.55);
    backdrop-filter:blur(4px);
    opacity:${({$open})=>$open?1:0};
    visibility:${({$open})=>
        $open
            ? "visible"
            : "hidden"};
    transition:.35s ease;
`;
export const MobileDrawer = styled.aside`
    position: fixed;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    right: 0;
    width: min(420px, 100%);
    /* vh keeps compatibility; dvh tracks the real visible mobile viewport. */
    height: 100vh;
    height: 100dvh;
    max-height: 100dvh;
    z-index: 1300;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    background-image:
        linear-gradient(
            rgba(11,24,17,.88),
            rgba(8,17,12,.96)
        ),
        url(${({background})=>background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-left:1px solid rgba(255,255,255,.08);
    box-shadow:
        -25px 0 60px rgba(0,0,0,.35);
    transform:${({$open})=>
        $open
            ? "translateX(0)"
            : "translateX(100%)"};
    transition:
        transform .45s cubic-bezier(.22,.61,.36,1);
    overflow-x:hidden;
    &::before{
    content:"";
    position:absolute;
    top:-120px;
    right:-80px;
    width:260px;
    height:260px;
    border-radius:50%;
    background:
        rgba(217,201,29,.12);
    filter:blur(90px);
    pointer-events:none;
}
&::after{
    content:"";
    position:absolute;
    bottom:-160px;
    left:-120px;
    width:320px;
    height:320px;
    border-radius:50%;
    background:
        rgba(255,255,255,.05);
    filter:blur(120px);
    pointer-events:none;
}
`;
export const MobileNav = styled.nav`
    display:flex;
    flex-direction:column;
    gap:.8rem;
    margin-top:1rem;
    position:relative;
    z-index:2;
`;
export const MobileNavItem = styled(NavLink)`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:18px 20px;
    border-radius:18px;
    text-decoration:none;
    font-size:1rem;
    font-weight:600;
    color:white;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.04);
    transition:.35s;
    &:hover{
        background:
            rgba(255,255,255,.10);
        color:#D9C91D;
        transform:translateX(6px);
    }
    &.active{
        color:#D9C91D;
        background:
            rgba(255,255,255,.08);
    }
`;
export const MobileAccordion = styled.div`
    display:flex;
    flex-direction:column;
`;
export const MobileAccordionHeader = styled.button`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding:18px 20px;
    border:none;
    border-radius:18px;
    cursor:pointer;
    background:rgba(255,255,255,.04);
    color:white;
    font-size:1rem;
    font-weight:600;
    transition:.35s;
    &:hover{
        background:
            rgba(255,255,255,.10);
    }
    svg{
        transition:.35s;
    }
`;
export const MobileAccordionBody = styled.div`
    display:flex;
    flex-direction:column;
    gap:.5rem;
    margin-left:16px;
    margin-top:.5rem;
    padding-left:1rem;
    border-left:
        2px solid rgba(217,201,29,.30);
    max-height:${({$open})=>
        $open
            ? "500px"
            : "0"};
    overflow:hidden;
    transition:
        max-height .4s ease;
`;