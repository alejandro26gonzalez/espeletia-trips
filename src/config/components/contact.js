import {
    FiShield,
    FiCheckCircle,
    FiHeart
} from "react-icons/fi";
import { BsLeafFill } from "react-icons/bs";

export const certificationsConfig = [
    {
        icon: BsLeafFill,
        title: "titles.t_1",
        description:
            "texts.t_1",
    },
    {
        icon: FiCheckCircle,
        title: "titles.t_2",
        description:
            "texts.t_2",
    },
    {
        icon: FiShield,
        title: "titles.t_3",
        description:
            "texts.t_3",
    },
    {
        icon: FiHeart,
        title: "titles.t_4",
        description:
            "texts.t_4",
    },
];
export const titlesConfig = {
    badge: "badge",
    title: "main.title",
    title_description: "main.description",
    form_title: "form.title",
    form_description: "form.description",
    email_label: "form.boxes.email.label",
    email_place: "form.boxes.email.placeholder",
    name_label: "form.boxes.name.label",
    name_place: "form.boxes.name.placeholder",
    phone_label: "form.boxes.phone.label",
    phone_place: "form.boxes.phone.placeholder",
    checkbox: "form.checkbox",
    submt_1: "modals.submit.sending",
    submt_2: "modals.submit.confirmed",
    success_1: "modals.success.initial",
    success_2: "modals.success.ack"
};

export const contactCertificationConfig = {
    certificationsConfig,
    titlesConfig
};