import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
    email: "",
    name: "",
    phone: "",
    authorize: false,
};

export const useContactForm = () => {

    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState(initialState);

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

        setLoading(true);

        try {

            await emailjs.send(

                import.meta.env.VITE_EMAIL_SERVICE_ID,

                import.meta.env.VITE_EMAIL_TEMPLATE_ID,

                {
                    from_name: formData.name,
                    from_email: formData.email,
                    from_phone: formData.phone,
                    to_name: "Espeletia Trips",
                },

                import.meta.env.VITE_EMAIL_PUBLIC_KEY

            );

            setShowModal(true);

            resetForm();

        }

        catch (error) {

            console.error(error);

            alert(
                "No fue posible enviar el formulario. Intenta nuevamente."
            );

        }

        finally {

            setLoading(false);

        }

    };

    return {

        formData,

        loading,

        showModal,

        handleChange,

        handleSubmit,

        closeModal,

    };

};