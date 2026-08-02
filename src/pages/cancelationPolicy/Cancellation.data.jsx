import ICONOS from "../../assets/icons";
import {
    InfoRow,
    InfoIcon,
    InfoText,
    StyledTable,
    StyledList,
    InfoBlock,
} from "./Cancellation.styles";

import {
    FaCircleCheck
} from "react-icons/fa6";

import {
    FiPhone,
    FiMail,
    FiMapPin
} from "react-icons/fi";

import {
    HiOutlineExclamationTriangle
} from "react-icons/hi2";

const cancellationInformation = [
    {
        title: "Descripción general",
        content: (
            <p>
                Esta política regula los términos aplicables en caso de
                desistimiento, retracto o cancelación de los servicios
                turísticos contratados con Espeletia Trips.
            </p>
        ),
    },

    {
        title: "ARTÍCULO 1. Derecho de Retracto",
        content: (
            <>
                <InfoBlock>
                    <strong>Plazo</strong>
                    <p>5 días hábiles posteriores a la compra.</p>
                </InfoBlock>

                <InfoBlock>
                    <strong>Condición</strong>
                    <p>Siempre que el servicio no haya iniciado.</p>
                </InfoBlock>

                <InfoBlock>
                    <strong>Devolución</strong>
                    <p>
                        100% del valor pagado dentro de los 30 días calendario.
                    </p>
                </InfoBlock>
            </>
        ),
    },

    {
        title: "ARTÍCULO 2. Cancelación por parte del usuario",
        content: (
            <>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Anticipación</th>
                            <th>Porcentaje de devolución</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Más de 15 días</td>
                            <td>90%</td>
                        </tr>

                        <tr>
                            <td>Entre 8 y 14 días</td>
                            <td>70%</td>
                        </tr>

                        <tr>
                            <td>Entre 2 y 7 días</td>
                            <td>50%</td>
                        </tr>

                        <tr>
                            <td>Menos de 48 horas / No Show</td>
                            <td>No aplica devolución</td>
                        </tr>
                    </tbody>
                </StyledTable>

                <p>
                    <strong>Nota:</strong> Las cancelaciones deberán
                    notificarse por escrito a la agencia.
                </p>
            </>
        ),
    },

    {
        title: "ARTÍCULO 3. Cancelación por parte de la agencia",
        content: (
            <>
                <InfoRow>

                    <InfoIcon>
                        <FaCircleCheck />
                    </InfoIcon>

                    <InfoText>
                        Reprogramación sin costo.
                    </InfoText>

                </InfoRow>

                <InfoRow>
                    <InfoIcon>
                        <FaCircleCheck />
                    </InfoIcon>

                    <InfoText>
                        Devolución total del dinero.
                    </InfoText>

                </InfoRow>
            </>
        ),
    },

    {
        title: "ARTÍCULO 4. Situaciones excepcionales",
        content: (
            <InfoRow>
                <InfoIcon>
                    <HiOutlineExclamationTriangle />
                </InfoIcon>

                <InfoText>
                    En caso de factores naturales o situaciones
                    extraordinarias (actividad volcánica, cierre de vías,
                    deslizamientos, incendios, entre otros), los costos ya
                    ejecutados por transporte, alimentación, hospedaje,
                    guianza y pólizas no serán reembolsables.
                </InfoText>
            </InfoRow>
        ),
    },

    {
        title: "ARTÍCULO 5. Cesión de la reserva",
        content: (
            <StyledList>
                <li>Permitida hasta 48 horas antes del tour.</li>
                <li>Debe notificarse por escrito.</li>
                <li>El nuevo viajero debe cumplir todos los requisitos.</li>
            </StyledList>
        ),
    },

    {
        title: "ARTÍCULO 6. Servicios no utilizados",
        content: (
            <>
                <p>No habrá devolución por:</p>

                <StyledList>
                    <li>Servicios no utilizados por decisión del usuario.</li>
                    <li>Llegadas tardías.</li>
                    <li>Mal de altura.</li>
                    <li>Problemas de salud del viajero.</li>
                </StyledList>
            </>
        ),
    },

    {
        title: "¿Tienes dudas sobre esta política?",
        content: (
            <>
                <p>
                    Para mayor información o solicitudes relacionadas con
                    cancelaciones y reembolsos puedes comunicarte con nosotros:
                </p>

                <InfoRow>
                    <InfoIcon>
                        <FiPhone />
                    </InfoIcon>

                    <InfoText>
                        +57 322 563 2587
                    </InfoText>
                </InfoRow>

                <InfoRow>
                    <InfoIcon>
                        <FiMail />
                    </InfoIcon>

                    <InfoText>
                        turismo@gmail.com
                    </InfoText>
                </InfoRow>

                <InfoRow>
                    <InfoIcon>
                        <FiMapPin />
                    </InfoIcon>

                    <InfoText>
                        Calle 4 # 8-5 – Galería Municipal, Murillo, Tolima.
                    </InfoText>
                </InfoRow>
            </>
        ),
    },
];

export default cancellationInformation;