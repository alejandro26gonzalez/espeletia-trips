import styled from "styled-components";
import { ICONS_URLS } from "../constants/iconsLinks";

const WhatsAppButton = ({ phoneNumber = "+573170566675", message = "Hola! Quisiera información. Mi nombre es " }) => {
    const handleClick = () => {
        // Abre WhatsApp en una nueva pestaña con el mensaje predefinido
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <Button onClick={handleClick}>
            <img 
                src={ICONS_URLS.WHATSAPP_BLACK}
                alt="WhatsApp" 
                width={30} 
                height={30} 
            />
        </Button>
    );
};

export default WhatsAppButton;

// Estilos
const Button = styled.button`
    position: fixed;
    bottom: 2rem;           /* distancia desde el borde inferior */
    right: 2rem;            /* esquina inferior derecha */
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: none;
    background-color: #25D366; /* verde característico de WhatsApp */
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    }
`;
