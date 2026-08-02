import { Routes,Route } from 'react-router-dom'
import React, { Suspense } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import useResetScrollPosition from './hooks/useResetScrollPosition';

const Home = React.lazy(() => import("./pages/home/Home"));
const Contacto = React.lazy(() => import("./pages/contacto/Contact"));
const Tours = React.lazy(() => import("./pages/tours/Tours"));
const About = React.lazy(() => import('./pages/aboutUs/AboutUs'));
const FloatingSocialBar = React.lazy(() => import("./components/floatingsocialbar/FloatingSocialBar"));
const FooterRef = React.lazy(() => import("./components/footerRef/FooterRef"));
const TourDetail = React.lazy(() => import("./pages/tourDetail/TourDetail"));
const CancelationPolicy = React.lazy(() => import("./pages/cancelationPolicy/Cancellation"));
const Privacy = React.lazy(() => import("./pages/privacy/Privacy"));
const BlogComingSoon = React.lazy(() => import("./pages/blog/Blog"));

function App() {

  useResetScrollPosition();

  return (
 
      <AppLayout>

        < FloatingSocialBar />

        <MainContent>
          <Suspense fallback={<div style={{textAlign: "center", marginTop: "2rem"}}>Cargando...</div>}>
            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/tours" element={<Tours />} />

              <Route path="/tours/:slug" element={<TourDetail />} />

              <Route path="/blog" element={<BlogComingSoon />} />

              <Route path="/contact" element={<Contacto />} />

              <Route path="/policy" element={<CancelationPolicy />} />

              <Route path="/privacy" element={<Privacy />} />
              
            </Routes>  
          </Suspense>
        </MainContent>

        <FooterRef />
      </AppLayout>
  );
};

export default App

const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;
