import styled from "styled-components";

export const CancellationContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.background};
    position: relative;
`;

// ESTILOS PARA EL ARCHIVO .DATA

export const InfoRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin: 1.25rem 0;
`;
export const InfoIcon = styled.div`
    width: 45px;
    min-width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width:100%;
        height:auto;
        display:block;
    }
`;
export const InfoText = styled.div`
    flex:1;
    line-height:1.8;
    color:${({theme})=>theme.colors.text};
`;
export const StyledTable = styled.table`
    width:100%;
    margin:2rem 0;
    border-collapse:collapse;
    overflow:hidden;
    border-radius:18px;
    box-shadow:0 10px 25px rgba(0,0,0,.05);
    thead{
        background:${({theme})=>theme.colors.primary};
    }
    th{
        padding:1rem;
        color:white;
        text-align:left;
    }
    td{
        padding:1rem;
        border-bottom:1px solid rgba(0,0,0,.08);
    }
    tbody tr:nth-child(even){
        background:#fafafa;
    }
    @media(max-width:768px){
        font-size:.9rem;
        th,
        td{
            padding:.75rem;
        }
    }
`;
export const StyledList = styled.ul`
    margin-top:1rem;
    padding-left:1.5rem;
    li{
        margin-bottom:.75rem;
        line-height:1.8;
    }
`;
export const InfoBlock = styled.div`
    margin:1.4rem 0;
    strong{
        display:block;
        margin-bottom:.35rem;
        color:${({theme})=>theme.colors.primary};
        font-size:1.05rem;
    }
    p{
        margin:0;
        line-height:1.8;
    }
`;
