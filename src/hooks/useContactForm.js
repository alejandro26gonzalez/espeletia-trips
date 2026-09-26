import { useState } from "react";


const initialState = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    authorize: false,
};

export const useContactForm = () => {

    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState(initialState);

    const [captchaToken, setCaptchaToken] = useState("")

    const handleCaptchaVerify = (token) => {
        setCaptchaToken(token);
    };

    const handleChange = ({ target }) => {

        const { name, value, checked, type } = target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : value,
        }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    const closeModal = () => setShowModal(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.authorize) {
            alert("Debes autorizar el tratamiento de datos.");
            return;
        }

        if (!captchaToken) {
            alert("Por favor, completa la verificación de seguridad.");
            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        phone: formData.phone,
                        message: formData.message,
                        "h-captcha-response": captchaToken,
                    }),
                }
            )

            const result = await response.json();

            if (!result.success) {
                throw new Error(
                    result.message || "Error al enviar el formulario."
                );
            }

            setShowModal(true);

            resetForm();

        } catch (error) {

            console.error(
                "Error enviando formulario:",
                error
            );

            alert(
                "No fue posible enviar el formulario. Intenta nuevamente."
            );

        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        captchaToken,
        showModal,
        closeModal,
        handleChange,
        handleSubmit,
        handleCaptchaVerify
    };
};