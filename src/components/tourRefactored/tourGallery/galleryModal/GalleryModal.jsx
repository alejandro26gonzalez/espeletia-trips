import {
    TransformWrapper,
    TransformComponent
} from "react-zoom-pan-pinch"

import {
    Overlay,
    ModalContainer,
    CloseButton,
    PreviousButton,
    NextButton,
    ImageContainer,
    MainImage,
    Footer,
    Counter,
    ThumbnailContainer,
    Thumbnail
} from "./GalleryModal.styles";

import {
    FiChevronLeft,
    FiChevronRight,
    FiX
} from "react-icons/fi";

const GalleryModal = ({
    isOpen,
    onClose,
    images,
    currentImage,
    setCurrentImage
}) => {

    if (!isOpen) return null;

    const previousImage = () => {
        setCurrentImage((prev)=>
            prev === 0
                ? images.length - 1
                : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((prev)=>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    };

    return (

        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e)=>e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <FiX/>
                </CloseButton>

                <PreviousButton onClick={previousImage}>
                    <FiChevronLeft/>
                </PreviousButton>

                <ImageContainer>
                    <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={5}
                    wheel={{
                        step: 0.2
                    }}
                    doubleClick={{
                        mode: "zoomIn"
                    }}
                    panning={{
                        disabled: false
                    }}
                    centerOnInit
                    limitToBounds={false}
                    centerZoomedOut
                    >
                        <TransformComponent
                        wrapperStyle={{
                            width: "100%",
                            height: "100%"
                        }}
                        contentStyle={{
                            width:"100%",
                            height:"100%",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                        >
                            <MainImage
                                src={images[currentImage]}
                                alt="Tour"
                            />
                        </TransformComponent>
                    </TransformWrapper>
                </ImageContainer>

                <NextButton onClick={nextImage}>
                    <FiChevronRight/>
                </NextButton>

                <Footer>
                    <Counter>
                        {currentImage + 1}
                        /
                        {images.length}
                    </Counter>
                </Footer>

                <ThumbnailContainer>
                    {
                        images.map((image,index)=>(
                            <Thumbnail
                                key={index}
                                src={image}
                                $active={index===currentImage}
                                onClick={()=>setCurrentImage(index)}
                            />
                        ))
                    }
                </ThumbnailContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default GalleryModal;