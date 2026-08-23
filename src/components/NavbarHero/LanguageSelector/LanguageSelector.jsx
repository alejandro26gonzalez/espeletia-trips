import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiGlobe, FiCheck } from "react-icons/fi";

import {
    Selector,
    Trigger,
    GlobeIcon,
    CurrentLanguage,
    Chevron,
    Dropdown,
    LanguageOption,
    Flag,
    LanguageName,
    CheckIcon,
} from "./LanguageSelector.styles";

const languages = [
    {
        code: "es",
        label: "Español",
        flag: "🇨🇴",
    },
    {
        code: "en",
        label: "English",
        flag: "🇺🇸",
    },
];

const LanguageSelector = () => {

    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const selectorRef = useRef(null);

    const currentLanguage =
        languages.find(
            (language) => language.code === i18n.language
        ) || languages[0];


    const changeLanguage = (language) => {

        i18n.changeLanguage(language);

        setIsOpen(false);
    };


    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                selectorRef.current &&
                !selectorRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);


    return (
        <Selector ref={selectorRef}>

            <Trigger
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                $isOpen={isOpen}
                aria-expanded={isOpen}
                aria-label="Seleccionar idioma"
            >

                <GlobeIcon>
                    <FiGlobe />
                </GlobeIcon>

                <CurrentLanguage>
                    {currentLanguage.code.toUpperCase()}
                </CurrentLanguage>

                <Chevron $isOpen={isOpen}>
                    <FiChevronDown />
                </Chevron>

            </Trigger>


            <Dropdown $isOpen={isOpen}>

                {languages.map((language) => {

                    const isActive =
                        currentLanguage.code === language.code;

                    return (
                        <LanguageOption
                            key={language.code}
                            type="button"
                            onClick={() =>
                                changeLanguage(language.code)
                            }
                            $isActive={isActive}
                        >

                            <Flag>
                                {language.flag}
                            </Flag>

                            <LanguageName>
                                {language.label}
                            </LanguageName>

                            {isActive && (
                                <CheckIcon>
                                    <FiCheck />
                                </CheckIcon>
                            )}

                        </LanguageOption>
                    );

                })}

            </Dropdown>

        </Selector>
    );
};

export default LanguageSelector;