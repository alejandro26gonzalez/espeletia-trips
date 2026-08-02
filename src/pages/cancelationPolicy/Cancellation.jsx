import { CancellationContainer } from "./Cancellation.styles";

import NavbarHero from "../../components/NavbarHero/NavbarHero";
import CancellationHero from "./components/CancellationHero/CancellationHero";
import CancellationInformation from "./components/CancellationInformation/CancellationInformation";

const Cancellation = () => {
    return (
        <CancellationContainer>

            <NavbarHero />

            <CancellationHero />

            <CancellationInformation />

        </CancellationContainer>
    );
};

export default Cancellation;