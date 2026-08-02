import styled from "styled-components";

export const Section = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:3rem;
    padding:1rem 0;
`;
export const Header = styled.div`
    width:min(750px,100%);
    text-align:center;
`;
export const Subtitle = styled.span`
    display:inline-block;
    padding:.6rem 1.2rem;
    border-radius:100px;
    background:${({theme})=>theme.colors.soft};
    color:${({ theme }) => theme.colors.primary};
    font-size:.82rem;
    font-weight:700;
    letter-spacing:.12em;
    margin-bottom:1rem;
`;
export const Title = styled.h2`
    margin:0;
    font-size:clamp(2.2rem,4vw,3.5rem);
    color:${({ theme }) => theme.colors.primary};
`;
export const Description = styled.p`
    margin:1.5rem auto 0;
    max-width:620px;
    line-height:1.9;
    color:${({ theme }) => theme.colors.text};
    font-size:1.05rem;
`;
export const Divider = styled.div`
    width:80px;
    height:4px;
    border-radius:20px;
    margin:2rem auto 0;
    background:linear-gradient(
        90deg,
        ${({theme})=>theme.colors.primary},
        ${({theme})=>theme.colors.secondary}
    );
`;
export const TabsWrapper = styled.div`
    display:flex;
    align-items:center;
    width:min(720px,100%);
    padding:.7rem;
    border-radius:24px;
    background:
        rgba(255,255,255,.9);
    backdrop-filter:blur(16px);
    box-shadow:
        0 20px 60px rgba(0,0,0,.08);
    border:
        1px solid rgba(0,0,0,.05);
    @media(max-width:768px){
        flex-direction:column;
    }
`;
export const TabButton = styled.button`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.9rem;
    padding:1.35rem;
    border:none;
    cursor:pointer;
    border-radius:18px;
    background:
        ${({$active,theme})=>
            $active
            ? theme.colors.primary
            : "transparent"
        };
    transition:.35s ease;
    &:hover{
        transform:translateY(-2px);
    }
`;
export const TabIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:42px;
    height:42px;
    border-radius:50%;
    background:
        ${({$active,theme})=>
            $active
            ? "rgba(255,255,255,.15)"
            : theme.colors.soft
        };
    color:
        ${({$active,theme})=>
            $active
            ? "#FFFFFF"
            : theme.colors.primary
        };
    transition:.3s;
`;
export const TabLabel = styled.span`
    font-size:1.05rem;
    font-weight:600;
    color:
        ${({$active,theme})=>
            $active
            ? "#FFFFFF"
            : theme.colors.primary
        };
    transition:.3s;
`;