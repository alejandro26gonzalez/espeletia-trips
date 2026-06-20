import { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    // Detecta scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) { // Aparece después de 300px de scroll
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // animación suave
        });
    };

    if (!visible) return null; // No renderiza si no está visible

    return (
        <Button onClick={scrollToTop}>↑</Button>
    );
};

export default ScrollButton;

// Estilos
const Button = styled.button`
    position: fixed;
    bottom: 2rem;
    left: 2rem;       // Limite inferior izquierdo
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background-color: #333;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    z-index: 1000;
    transition: opacity 0.3s ease, transform 0.3s ease;
    
    &:hover {
        background-color: #555;
        transform: scale(1.1);
    }
`;
