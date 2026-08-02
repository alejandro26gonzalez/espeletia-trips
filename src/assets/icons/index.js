import Escudo from "./certificateIcons/escudoIcono.svg";
import Hoja from "./certificateIcons/hojaIcono.svg";
import Personas from "./certificateIcons/peopleIcono.svg";
import HojaTe from "./certificateIcons/hoja-de-te.png";
import Valle from "./certificateIcons/belowfeatures/valle_ixycrz.png";
import Planeta from "./certificateIcons/belowfeatures/ambientalismo_ibsmix.png";
import Gente from "./certificateIcons/belowfeatures/business-people_hkjpaq.png";
import Corazon from "./certificateIcons/belowfeatures/corazon_f0ncok.png";
import OFF_MONTANA from "./destination/montain_k4xrjs.png";
import OFF_CALOR from "./destination/calor_o4akar.png";
import OFF_GOTA from "./destination/gota_kpypcb.png";
import OFF_BINOCULARES from "./destination/binoculares_tkwl9f.png";
import OFF_WALK from "./destination/walk_hum3qt.png";
import OFF_NEVADO from "./destination/nevado_qapphw.png";
import {
    FiPhone,
    FiMail,
    FiMapPin,
} from "react-icons/fi";
import {
    FaCircleCheck
} from "react-icons/fa6";
import {
    HiOutlineExclamationTriangle
} from "react-icons/hi2";

const ICONOS = {
    certificateIcons: {
        colasistencia: Escudo,
        cortolima: Hoja,
        escnna: Personas,
        mainIcon: HojaTe,
        belowFeaturesIcons: {
            main: Escudo,
            primero: Valle,
            segundo: Planeta,
            tercero: Gente,
            cuarto: Corazon
        }
    },
    destination: {
        montana: OFF_MONTANA,
        calor: OFF_CALOR,
        gota: OFF_GOTA,
        binoculares: OFF_BINOCULARES,
        walk: OFF_WALK,
        nevado: OFF_NEVADO
    },
    cancellationIcons: {
        okIcon: FaCircleCheck,
        carefulIcon: HiOutlineExclamationTriangle,
        phoneIcon: FiPhone,
        emailIcon: FiMail,
        locationIcon: FiMapPin
    }
};

export default ICONOS;