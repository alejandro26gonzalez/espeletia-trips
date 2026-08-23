import styled from "styled-components";

export const Selector = styled.div`
    position: relative;
    display: inline-flex;
`;
export const Trigger = styled.button`
    display: flex;
    align-items: center;
    gap: .45rem;
    height: 42px;
    padding: 0 .85rem;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 999px;
    background: ${({ $isOpen }) =>
        $isOpen
            ? "rgba(255,255,255,.15)"
            : "rgba(255,255,255,.08)"
    };
    color: inherit;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition:
        background .25s ease,
        border-color .25s ease,
        transform .25s ease;
    &:hover {
        background: rgba(255,255,255,.15);
        border-color: rgba(255,255,255,.35);
        transform: translateY(-1px);
    }
`;
export const GlobeIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;
export const CurrentLanguage = styled.span`
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: .05em;
`;
export const Chevron = styled.span`
    display: flex;
    transition: transform .25s ease;
    transform: ${({ $isOpen }) =>
        $isOpen
            ? "rotate(180deg)"
            : "rotate(0deg)"
    };
    svg {
        width: 14px;
        height: 14px;
    }
`;
export const Dropdown = styled.div`
    position: absolute;
    top: calc(100% + .6rem);
    right: 0;
    min-width: 180px;
    padding: .4rem;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(0,0,0,.06);
    box-shadow:
        0 18px 45px rgba(0,0,0,.12);
    opacity: ${({ $isOpen }) =>
        $isOpen ? 1 : 0
    };
    visibility: ${({ $isOpen }) =>
        $isOpen ? "visible" : "hidden"
    };
    transform: ${({ $isOpen }) =>
        $isOpen
            ? "translateY(0) scale(1)"
            : "translateY(-8px) scale(.97)"
    };
    transform-origin: top right;
    transition:
        opacity .2s ease,
        visibility .2s ease,
        transform .2s ease;
    z-index: 1000;
`;
export const LanguageOption = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: .7rem .8rem;
    border: none;
    border-radius: 11px;
    background: ${({ $isActive, theme }) =>
        $isActive
            ? theme.colors.primaryLight
            : "transparent"
    };
    color: ${({ $isActive, theme }) =>
        $isActive
            ? theme.colors.primary
            : theme.colors.text
    };
    cursor: pointer;
    text-align: left;
    transition: background .2s ease;
    &:hover {
        background: ${({ theme }) =>
            theme.colors.primaryLight
        };
    }
`;
export const Flag = styled.span`
    font-size: 1.15rem;
    line-height: 1;
`;
export const LanguageName = styled.span`
    flex: 1;
    font-size: .9rem;
    font-weight: 500;
`;
export const CheckIcon = styled.span`
    display: flex;
    color: ${({ theme }) =>
        theme.colors.primary
    };
    svg {
        width: 16px;
        height: 16px;
    }
`;