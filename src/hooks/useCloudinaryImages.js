import { useState, useEffect } from "react";

export const useCloudinaryImages = ( tag ) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME   || "dago9";
        const URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`;

        fetch(URL)
        .then((res) => {
            if (!res.ok) throw new Error("Error cargando imágenes");
            return res.json();
        })
        .then((data) => {
            const urls = data.resources.map(
                (img) => `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v${img.version}/${img.public_id}.${img.format}`
            );
            setImages(urls);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Cloudinary Error", error);
            setLoading(false);
        });
    }, [tag]);

    return { imagesCarousel: images, loading };
};