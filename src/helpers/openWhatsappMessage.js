const openWhatsappMessage = (name = "") => {
    const phoneNumber = "573170566675"
    ;
    const baseText = "Hola!, Quisiera más información. Mi nombre es ";
    const fullText = `${baseText}${name}`;

    window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullText)}`,
        "_blank"
    );
};

export default openWhatsappMessage;