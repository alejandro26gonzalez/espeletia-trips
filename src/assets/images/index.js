import NavbarLogo from "./pages/components/logo_espeletia.png"
import BackgroundMobile from "./pages/components/fondoTopHero.png";
import ColasistenciaLogo from "./pages/components/certificateLogos/colasistencia.png";
import CortolimaLogo from "./pages/components/certificateLogos/cortolima.png";
import EscnnaLogo from "./pages/components/certificateLogos/escnna.png";
import CertificateCard1 from "./pages/components/certificateLogos/tarjeta_fondo1.png";
import CertificateCard2 from "./pages/components/certificateLogos/tarjeta_fondo2.png";
import HomeBkg1 from "./pages/components/destination/Home1_h044ag.jpg";
import HomeBkg2 from "./pages/components/destination/Home2_ehvczf.jpg";
import HomeBkg3 from "./pages/components/destination/Home3_ti2sae.jpg";
import HomeBkg4 from "./pages/components/destination/Home4_cfbwty.jpg";
import HomeBkg5 from "./pages/components/destination/Home5_hotunh.jpg";
import HomeBkg6 from "./pages/components/destination/Home6_s2zwji.jpg";
import DestinationBackground from "./pages/components/destination/ofertaBackground_hvgp3a.png";
import AddBkg from "./pages/components/additionalServices/mainFondo_neqiav.png";
import AddCard1 from "./pages/components/additionalServices/fondo1.png";
import AddCard2 from "./pages/components/additionalServices/fondo2.png";
import FormBkg from "./pages/components/form/formBkg.png";
import TurismoResp from "./pages/components/turismo_logo_qwpf2z.png";
import CtaBackground from "./pages/components/CTAfinalle/ctaFinale.png";
import TestimonioAv1 from "./pages/components/testimonials/boy1_f9mibq.png";
import TestimonioAv2 from "./pages/components/testimonials/girl1_wygt4b.png";
import TestimonioAv3 from "./pages/components/testimonials/girl2_ytull0.png";
import TestimonioBkg1 from "./pages/components/testimonials/fondo1.png";
import TestimonioBkg2 from "./pages/components/testimonials/fondo2.png";
import videoCard1 from "./pages/components/videoCta/backcard1_avspax.jpg";
import videoCard2 from "./pages/components/videoCta/backcard2_ocsmov.jpg";
import videoCard3 from "./pages/components/videoCta/backcard3_ylrwi8.jpg";
import videoCard4 from "./pages/components/videoCta/backcard4_uda1m8.jpg";
import videoBackground from "./pages/components/videoCta/fondo.png";
import Video from "./pages/components/videoCta/VidHome_nxyppy.mp4";
import aboutMainBkg from "./pages/about/fondoContact1_otxxnh.png";
import aboutSecondBkg from "./pages/about/segundaIMGContact_bmfczf.png";
import aboutFootImg from "./pages/about/Blog6_pkpere.jpg";
import contactMkg from "./pages/contact/fondoHero.png";
import contactPlant from "./pages/contact/plantasContacto_nmcpm0.png";
import tourMainHero from "./pages/tours/all/heroBkg.png";
import tourCtaImg from "./pages/tours/all/ctaImg.png";
import tourSub1 from "./tours/individualHeros/valle.png";
import tourSub2 from "./tours/individualHeros/campanita.png";
import tourSub3 from "./tours/individualHeros/canaan.png";
import tourSub4 from "./tours/individualHeros/mirador.png";
import tourSub5 from "./tours/individualHeros/Tours2_ugvivz.png";
import tourSub6 from "./tours/individualHeros/isabel.png";
import allTourHero1 from "./tours/allToursHeros/valle.png";
import allTourHero2 from "./tours/allToursHeros/campanita.png";
import allTourHero3 from "./tours/allToursHeros/canaan.png";
import allTourHero4 from "./tours/allToursHeros/mirador.png";
import allTourHero5 from "./tours/allToursHeros/Tours2_ugvivz.png";
import allTourHero6 from "./tours/allToursHeros/isabel.png";
import helperFrailejon from "./ui/plants/plantasContacto_nmcpm0.png";
import cancellationHeroBack from "./pages/cancelation/fondo.png";
import cancellationMountainHelper from "./pages/helpers/mountainHelper.png";
import privacyHelperPlant from "./pages/helpers/follaje.png";
import privacyHero from "./pages/privacy/fondo.png";


const IMAGES = {
    logo: NavbarLogo,
    turismoResponsableLogo: TurismoResp,
    componentes: {
        navbar: {
            logo: NavbarLogo,
            backgroundMobile: BackgroundMobile
        },
        topHero: {
            backgroundIMG: BackgroundMobile
        },
        certificateRefactored: {
            colasistencia: ColasistenciaLogo,
            cortolima: CortolimaLogo,
            escnna: EscnnaLogo,
            cardBkg1: CertificateCard1,
            cardBkg2: CertificateCard2
        },
        destinationCards: {
            mainBkg: DestinationBackground,
            home1: HomeBkg1,
            home2: HomeBkg2,
            home3: HomeBkg3,
            home4: HomeBkg4,
            home5: HomeBkg5,
            home6: HomeBkg6
        },
        additionalServ: {
            main: AddBkg,
            card1: AddCard1,
            card2: AddCard2
        },
        form: {
            background: FormBkg
        },
        ctaFinale: CtaBackground,
        testimonio: {
            avatar1: {
                profile: TestimonioAv2,
                background: TestimonioBkg1
            },
            avatar2: {
                profile: TestimonioAv1,
                background: TestimonioBkg2
            },
            avatar3: {
                profile: TestimonioAv3,
                background: TestimonioBkg1
            }
        },
        videoSection:{
            backCard1: videoCard1,
            backCard2: videoCard2,
            backCard3: videoCard3,
            backCard4: videoCard4,
            background: videoBackground,
            video: Video
        }
    },
    acercaDe: {
        heroBks: aboutMainBkg,
        secondImg: aboutSecondBkg,
        footerImg: aboutFootImg
    },
    contact: {
        heroBkg: contactMkg,
        plants: contactPlant
    },
    tour:{
        main:{
            hero: tourMainHero,
            cta: tourCtaImg
        },
        subPages:{
            valle: tourSub1,
            campanita: tourSub2,
            canaan: tourSub3,
            mirador: tourSub4,
            oso: tourSub5,
            nevado: tourSub6
        },
        allToursHeros: {
            valle: allTourHero1,
            campanita: allTourHero2,
            canaan: allTourHero3,
            mirador: allTourHero4,
            oso: allTourHero5,
            nevado: allTourHero6
        }
    },
    cancellationPage: {
        background: cancellationHeroBack
    },
    privacy :{
        hero: privacyHero
    },
    helpers: {
        plants: {
            frailejon: helperFrailejon
        },
        cancellation: {
            mountain: cancellationMountainHelper
        },
        privacy: {
            plant: privacyHelperPlant
        }
    }
};

export default IMAGES;

