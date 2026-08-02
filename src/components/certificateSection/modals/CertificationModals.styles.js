import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const slideUp = keyframes`
    from { opacity: 0; transform: translateY(32px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

// ── BACKDROP ────────────────────────────────────────────────
export const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1250;
    background: rgba(10, 20, 15, 0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: ${fadeIn} 0.22s ease;
`;

// ── MODAL SHELL ──────────────────────────────────────────────
export const ModalBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 680px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 6px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
    animation: ${slideUp} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    font-family: 'DM Sans', 'Segoe UI', sans-serif;

  /* Custom scrollbar */
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.25) transparent;
    &::-webkit-scrollbar { width: 5px; }
    &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 10px; }
`;

// ── HEADER ───────────────────────────────────────────────────
export const ModalHeader = styled.div`
    padding: 2.25rem 2rem 1.75rem;
    position: relative;
    overflow: hidden;

    background: ${({ variant }) =>
    variant === "escnna"
        ? "linear-gradient(135deg, #7a1f00 0%, #e85d26 100%)"
        : variant === "colasistencia"
        ? "linear-gradient(135deg, #0a1a3a 0%, #1a5fa8 100%)"
        : "linear-gradient(135deg, #0e2e14 0%, #3a7d44 100%)"};

    &::after {
    content: '';
    position: absolute;
    top: -30px; right: -30px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    }
`;

export const HeaderIcon = styled.span`
    font-size: 3rem;
    display: block;
    margin-bottom: 0.6rem;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25));
`;

export const ModalTitle = styled.h2`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.9rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 0.2rem;
    line-height: 1.15;
`;

export const ModalSubtitle = styled.p`
    font-size: 0.78rem;
    font-weight: 300;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
    margin: 0;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 1.1rem;
    right: 1.1rem;
    background: rgba(255,255,255,0.15);
    border: none;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.18s;
    &:hover { background: rgba(255,255,255,0.28); }
`;

// ── BODY ─────────────────────────────────────────────────────
export const ModalBody = styled.div`
    background: #fff;
    padding: 2rem;
`;

export const Block = styled.div`
    border-left: 3px solid ${({ variant }) =>
    variant === "escnna" ? "#e85d26"
    : variant === "colasistencia" ? "#1a5fa8"
    : "#3a7d44"};
    background: #fafafa;
    border-radius: 0 4px 4px 0;
    padding: 1rem 1.25rem;
    margin-bottom: 1.4rem;

    h5 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a3a4a;
    margin: 0 0 0.4rem;
    }

    p {
    font-size: 0.875rem;
    color: #444;
    line-height: 1.7;
    margin: 0;
    }
`;

export const CommitmentBox = styled.div`
    padding: 1.2rem 1.5rem;
    border-radius: 4px;
    margin-top: 1.5rem;

    background: ${({ variant }) =>
    variant === "escnna"
        ? "linear-gradient(135deg, #fff5f0, #ffe8da)"
        : variant === "colasistencia"
        ? "linear-gradient(135deg, #f0f6ff, #d8e8fb)"
        : "linear-gradient(135deg, #f0fff2, #d8f5dc)"};

    border: 1px solid ${({ variant }) =>
    variant === "escnna" ? "#f5c9b0"
    : variant === "colasistencia" ? "#a8c8f0"
    : "#a8ddb0"};

    p {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.05rem;
    font-style: italic;
    color: #1a3a4a;
    line-height: 1.6;
    margin: 0;
    }

    span {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ variant }) =>
        variant === "escnna" ? "#c44b1a"
        : variant === "colasistencia" ? "#1248a0"
        : "#2e6336"};
    }
`;

// ── FOOTER ───────────────────────────────────────────────────
export const ModalFooter = styled.div`
    background: #f5f0e8;
    border-top: 1px solid #e8dfd0;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
`;

export const FooterBrand = styled.span`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-style: italic;
    font-size: 0.95rem;
    color: #7a4f2d;
`;

export const FooterRight = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
`;

export const Pill = styled.span`
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 0.3em 0.8em;
    border-radius: 20px;
    text-transform: uppercase;
    background: ${({ variant }) =>
    variant === "escnna" ? "#fff0e8"
    : variant === "colasistencia" ? "#edf3ff"
    : "#edfbf0"};
    color: ${({ variant }) =>
    variant === "escnna" ? "#c44b1a"
    : variant === "colasistencia" ? "#1248a0"
    : "#2e6336"};
    border: 1px solid ${({ variant }) =>  
    variant === "escnna" ? "#f5c9b0"
    : variant === "colasistencia" ? "#a8c8f0"
    : "#a8ddb0"};
`;

export const ConfirmBtn = styled.button`
    border: none;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.5rem 1.4rem;
    border-radius: 2px;
    cursor: pointer;
    transition: filter 0.18s, transform 0.18s;
    background: ${({ variant }) =>
    variant === "escnna" ? "#e85d26"
    : variant === "colasistencia" ? "#1a5fa8"
    : "#3a7d44"};
    &:hover { filter: brightness(0.88); transform: translateY(-1px); }
`;
