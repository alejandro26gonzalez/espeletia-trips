import styled from "styled-components";

export const ContainerCertificate = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem 1rem;
`;
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    p {
        width: 80%;
        text-align: center;
    }
    @media (min-width: 768px) {
        p {
            width: 60%;
        }
    }
`
export const Decoration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;
export const Line = styled.div`
    width: 140px;
    height: 2px;
    background: #d9d7b8;

    @media (max-width: 480px) {
        width: 70px; /* Líneas más cortas en celulares para que no rompa */
    }
`;
export const Leaf = styled.img`
    width: 48px;
    height: auto;
`;
export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem; /* Espacio extra porque los iconos flotan arriba */
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    padding-top: 2rem;

    /* 💻 ESCRITORIO: Vista horizontal con la del medio más grande */
    @media (min-width: 1024px) {
        display: grid;
        /* Definimos proporciones fijas en desktop: laterales 1fr y la central 1.15fr */
        grid-template-columns: 1fr 1.15fr 1fr; 
        align-items: center; /* Alinea verticalmente al centro para que la del medio sobresalga arriba y abajo */
        gap: 2rem;
    }

    /* 📑 TABLET: Distribución fluida de 2 columnas (la tercera pasa abajo centrada) */
    @media (min-width: 650px) and (max-width: 1023px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3.5rem 2rem;
    }

`;
export const CardCertificate = styled.div`
    position: relative;
    overflow: visible;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    max-width: 400px; /* Limita el ancho en móvil y tablet para que no se deforme */
    min-height: 480px;
    padding: 5rem 2rem 2rem;

    background: linear-gradient(180deg,#ffffff 0%,#fcfcfa 100%);
    border-radius: 24px;
    box-shadow: 0 12px 35px rgba(0,0,0,.12);
    cursor: pointer;
    transition: transform .35s ease, box-shadow .35s ease;

    &::before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:5px;
        background:#7A8E3A;
        border-radius:24px 24px 0 0;
    }

    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 22px 45px rgba(0,0,0,.18);
    }

    /* ✨ EFECTO DESTACADO DE LA SEGUNDA TARJETA (CORTOLIMA) */
    @media (min-width: 1024px) {
        max-width: none; /* Deja que Grid controle el ancho en PC */
        
        &:nth-child(2) {
            min-height: 530px; /* Más alta */
            box-shadow: 0 20px 45px rgba(0,0,0,.15);
            
            /* Un pequeño extra en el hover de la central */
            &:hover {
                transform: translateY(-15px);
            }
        }
    }

    /* En tablets, permitimos que usen todo el ancho de su celda de grid */
    @media (min-width: 650px) and (max-width: 1023px) {
        max-width: none;
        
        /* Opcional: Si quieres que la tercera tarjeta ocupe las dos columnas abajo */
        &:nth-child(3) {
            grid-column: span 2;
            max-width: 450px;
            justify-self: center;
        }
    }
`;
export const Logo = styled.img`
    width:190px;
    height:auto;
    object-fit:contain;
    margin-bottom:20px;
    transition:.3s;

    @media (max-width: 480px) {
        width: 150px; /* Logos un poco más chicos en pantallas compactas */
    }

    ${CardCertificate}:hover &{
        transform:scale(1.05);
    }
`;
export const TopIcon = styled.img`
    position:absolute;
    top:-40px;
    left:50%;
    transform:translateX(-50%);
    width:82px;
    background:white;
    padding:15px;
    border-radius:50%;
    box-shadow:0 8px 18px rgba(0,0,0,.12);
`;
export const Description = styled.p`
    text-align:center;
    line-height:1.8;
    color:#555;
    font-size:.98rem;
    margin:30px 0;
`;
export const CertificateButton = styled.div`
    margin-top:auto;

    display:flex;
    align-items:center;
    justify-content:center;
    gap:.7rem;
    z-index:1;

    width:85%;
    padding:14px 0;
    border-radius:40px;
    background:#5C7433;
    color:white;
    font-weight:600;
    transition:.3s;

    ${CardCertificate}:hover &{
        background:#496026;
        transform:scale(1.03);
    }
    
`;
export const Mountains = styled.img`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    pointer-events:none;
    user-select:none;
    opacity:.8;
    border-radius: 0 0 24px 24px;
`;