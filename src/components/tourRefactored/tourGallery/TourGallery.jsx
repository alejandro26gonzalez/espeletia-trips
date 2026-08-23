import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../config/pages/allTours/allTours";

import {
    Section,
    Header,
    Title,
    Description,
    GalleryGrid,
    MainImage,
    SecondaryImage,
    ViewGalleryButton
} from "./TourGallery.styles";

import GalleryModal from "./galleryModal/GalleryModal";

const TourGallery = ({ gallery, previewCount = 5 }) => {

    const {t} = useTranslation("tour");

    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    const handleOpenModal = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };


    return (

        <Section>

            <Header>

                <Title>
                    {t(toursDetailPlainConfig.gallery.titleKey)}
                </Title>

                <Description>
                    {t(toursDetailPlainConfig.gallery.descriptionKey)}
                </Description>

            </Header>

            <GalleryGrid>

                <MainImage
                    src={gallery[0]}
                    alt="Imagen del tour"
                    onClick={() => handleOpenModal(0)}
                />

                {
                    gallery
                        .slice(1,previewCount)
                        .map((image,index)=>(

                            <SecondaryImage
                                key={index}
                                src={image}
                                alt={`Imagen ${index + 2} del tour`}
                                onClick={() => handleOpenModal(index + 1)}
                            />

                        ))
                }

            </GalleryGrid>

            <ViewGalleryButton
            onClick={() => handleOpenModal(0)}
            >
                {t(toursDetailPlainConfig.gallery.buttonKey)}
            </ViewGalleryButton>

            <GalleryModal 
            isOpen={isOpen}
            onClose={handleCloseModal}
            images={gallery}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            />

        </Section>

    );

};

export default TourGallery;