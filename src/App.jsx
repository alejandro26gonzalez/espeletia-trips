import { Routes,Route } from 'react-router-dom'
import React, { Suspense } from "react";
import styled from "styled-components";
import ScrollToTop from "./hooks/ScrollToTop"
import ScrollButton from "./components/ScrollButton"
import WahtsappButton from "./components/WhatsAppButton"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = React.lazy(() => import("./routes/Home"));
const About = React.lazy(() => import("./routes/About"));
const Blog = React.lazy(() => import("./routes/Blog"));
const Galery = React.lazy(() => import("./routes/Galery"));
const Contact = React.lazy(() => import("./routes/Contact"));
const CancelationPolicy = React.lazy(() => import("./routes/CancelationPolicy"));
const Privacy = React.lazy(() => import("./routes/Privacy"));
const Tours = React.lazy(() => import("./routes/Tours"));
const NavbarSocial = React.lazy(() => import("./components/Socialbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const BlogGuiaViajero = React.lazy(() => import("./blogPages/ViajeroGuia"));
const BlogIsabelNevado = React.lazy(() => import("./blogPages/IsabelNevado"));
const BlogMurillo = React.lazy(() => import("./blogPages/MurilloBlog"));
const BlogParqueNacional = React.lazy(() => import("./blogPages/BlogParqueNacional"));
const Tumbas = React.lazy(() => import("./tours/Tumbas"));
const Nevado = React.lazy(() => import("./tours/Nevado"));
const Canaan = React.lazy(() => import("./tours/Canaan"));
const Campanita = React.lazy(() => import("./tours/Campanita"));
const Oso = React.lazy(() => import("./tours/Oso"));
const Mirador = React.lazy(() => import("./tours/Mirador"));

function App() {

  return (
 
      <AppLayout>

        <ScrollToTop />

        <NavbarSocial />

        <MainContent>
          <Suspense fallback={<div style={{textAlign: "center", marginTop: "2rem"}}>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />

              <Route path="/blog/guia-del-viajero" element={<BlogGuiaViajero />} />
              <Route path="/blog/nevado-santa-isabel" element={<BlogIsabelNevado />} />
              <Route path="/blog/murillo-cultura-historia" element={<BlogMurillo />} />
              <Route path="/blog/parque-nacional-los-nevados" element={<BlogParqueNacional />} />

              <Route path="/galery" element={<Galery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policy" element={<CancelationPolicy />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/tours" element={<Tours />} />

              <Route path="/tours/valle-tumbas" element={<Tumbas />} />
              <Route path="/tours/nevado-santa-isabel" element={<Nevado />} />
              <Route path="/tours/canaan" element={<Canaan />} />
              <Route path="/tours/campanita" element={<Campanita />} />
              <Route path="/tours/camino-oso" element={<Oso />} />
              <Route path="/tours/mirador" element={<Mirador />} />
            </Routes>  
          </Suspense>
        </MainContent>

        <Footer />

        <ScrollButton />
        <WahtsappButton />

      </AppLayout>

  )
}

export default App

const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;
