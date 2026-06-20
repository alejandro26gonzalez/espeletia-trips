import GaleryLayout from "../components/galeryComponents/GaleryLayout"
import PhotoMainer from "../components/galeryComponents/PhotoMainer"
import { Container } from "react-bootstrap"
import Button from "../components/Button"
import { useState } from "react";
import { useNavigate } from "react-router";
import useBreakpoint from "../hooks/useBreakpoint";
import ResponsiveGalery from "../components/galeryComponents/ResponsiveGalery"


const Galery = () => {

    const isResponsive = useBreakpoint("(max-width: 768px)");
    const toursGallery = [
    {
        tour: "valle",
        title: "Valle de las Tumbas",
        descripcion:
        "Un paisaje místico donde la historia duerme entre formaciones naturales que parecen esculpidas por el tiempo.",
        linkTour: "/tours/valle-tumbas",
    },
    {
        tour: "campanita",
        title: "Termal de la Campanita",
        descripcion:
        "Aguas tibias escondidas en la montaña, un refugio secreto donde el silencio sana y la naturaleza abraza.",
        linkTour: "/tours/campanita",
    },
    {
        tour: "canaan",
        title: "Termal de Canaán",
        descripcion:
        "Un oasis natural entre niebla y bosque altoandino, perfecto para reconectar con tu energía interior.",
        linkTour: "/tours/canaan",
    },
    {
        tour: "mirador",
        title: "Mirador Los Nevados",
        descripcion:
        "Un balcón al infinito donde los volcanes tocan el cielo y cada amanecer parece un milagro.",
        linkTour: "/tours/mirador",
    },
    {
        tour: "oso",
        title: "Camino del Oso Mosul",
        descripcion:
        "Senderos ancestrales entre bosque y páramo que despiertan el espíritu aventurero.",
        linkTour: "/tours/camino-oso",
    },
    {
        tour: "nevado",
        title: "Expedición Nevado Santa Isabel",
        descripcion:
        "Una travesía hacia el corazón blanco de la montaña, donde el hielo eterno guarda historias de altura.",
        linkTour: "/tours/nevado-santa-isabel",
    },
    ];
    const navigate = useNavigate();
    const [selectedTour, setSelectedTour] = useState("valle");

    const currentTour = toursGallery.find(
        (tour) => tour.tour === selectedTour
    );

    return (
        <GaleryLayout> 

            {isResponsive ? (
                <div
                style={{
                    width:"95%",
                    display: "flex",
                    justifyContent:"center",
                }}
                >
                    <ResponsiveGalery 
                    selectedTour={selectedTour}
                    setSelectedTour={setSelectedTour}
                    />
                </div>
            ):(
                <Container className="w-100 d-flex gap-3 justify-content-evenly py-0"
                style={{
                    marginBottom:"2rem"
                }}
                >

                    <div className="d-flex flex-column gap-1 align-items-start px-0 me-4 justify-content-center w-50" style={{
                        height:"70vh",
                    }}>
                        <h1 style={{
                            fontSize:"5rem"
                        }}>Murillo</h1>

                        {/* aca estos textos y el button van a cambiar segun la eleccion del tour a visualizar */}
                        <h3>{currentTour.title}</h3>
                        
                        <p>{currentTour.descripcion}</p>

                        <p>
                        Vive una experiencia única en {currentTour.title}, donde cada paso
                        transforma tu forma de ver la montaña.
                        </p>

                        <div className="w-50 d-flex align-items-start">
                            <Button 
                            text="Ver tour completo"
                            onClick={() => navigate(currentTour.linkTour)}
                            />
                        </div>
                        
                    </div>

                    <PhotoMainer 
                    selectedTour={selectedTour}
                    setSelectedTour={setSelectedTour}
                    />

                </Container>
            )}
        </GaleryLayout>
    )
}

export default Galery

