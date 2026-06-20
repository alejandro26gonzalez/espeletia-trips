import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

// ── ANIMATIONS ──────────────────────────────────────────────
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(32px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

// ── BACKDROP ────────────────────────────────────────────────
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(10, 20, 15, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeIn} 0.22s ease;
`;

// ── MODAL SHELL ──────────────────────────────────────────────
const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  animation: ${slideUp} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  font-family: 'DM Sans', 'Segoe UI', sans-serif;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.25) transparent;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 10px; }
`;

// ── HEADER ───────────────────────────────────────────────────
const ModalHeader = styled.div`
  padding: 2.25rem 2rem 1.75rem;
  position: relative;
  overflow: hidden;

  background: ${({ variant }) =>
    variant === "escnna"
      ? "linear-gradient(135deg, #7a1f00 0%, #e85d26 100%)"
      : variant === "colasistencia"
      ? "linear-gradient(135deg, #0a1a3a 0%, #1a5fa8 100%)"
      : "linear-gradient(135deg, #0e2e14 0%, #3a7d44 100%)"};

  &::after {
    content: '';
    position: absolute;
    top: -30px; right: -30px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const HeaderIcon = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: 0.6rem;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25));
`;

const ModalTitle = styled.h2`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.9rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.2rem;
  line-height: 1.15;
`;

const ModalSubtitle = styled.p`
  font-size: 0.78rem;
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.75);
  margin: 0;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: rgba(255,255,255,0.15);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s;
  &:hover { background: rgba(255,255,255,0.28); }
`;

// ── BODY ─────────────────────────────────────────────────────
const ModalBody = styled.div`
  background: #fff;
  padding: 2rem;
`;

const Block = styled.div`
  border-left: 3px solid ${({ variant }) =>
    variant === "escnna" ? "#e85d26"
    : variant === "colasistencia" ? "#1a5fa8"
    : "#3a7d44"};
  background: #fafafa;
  border-radius: 0 4px 4px 0;
  padding: 1rem 1.25rem;
  margin-bottom: 1.4rem;

  h5 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a3a4a;
    margin: 0 0 0.4rem;
  }

  p {
    font-size: 0.875rem;
    color: #444;
    line-height: 1.7;
    margin: 0;
  }
`;

const CommitmentBox = styled.div`
  padding: 1.2rem 1.5rem;
  border-radius: 4px;
  margin-top: 1.5rem;

  background: ${({ variant }) =>
    variant === "escnna"
      ? "linear-gradient(135deg, #fff5f0, #ffe8da)"
      : variant === "colasistencia"
      ? "linear-gradient(135deg, #f0f6ff, #d8e8fb)"
      : "linear-gradient(135deg, #f0fff2, #d8f5dc)"};

  border: 1px solid ${({ variant }) =>
    variant === "escnna" ? "#f5c9b0"
    : variant === "colasistencia" ? "#a8c8f0"
    : "#a8ddb0"};

  p {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.05rem;
    font-style: italic;
    color: #1a3a4a;
    line-height: 1.6;
    margin: 0;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ variant }) =>
      variant === "escnna" ? "#c44b1a"
      : variant === "colasistencia" ? "#1248a0"
      : "#2e6336"};
  }
`;

// ── FOOTER ───────────────────────────────────────────────────
const ModalFooter = styled.div`
  background: #f5f0e8;
  border-top: 1px solid #e8dfd0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FooterBrand = styled.span`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: 0.95rem;
  color: #7a4f2d;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

const Pill = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  text-transform: uppercase;
  background: ${({ variant }) =>
    variant === "escnna" ? "#fff0e8"
    : variant === "colasistencia" ? "#edf3ff"
    : "#edfbf0"};
  color: ${({ variant }) =>
    variant === "escnna" ? "#c44b1a"
    : variant === "colasistencia" ? "#1248a0"
    : "#2e6336"};
  border: 1px solid ${({ variant }) =>
    variant === "escnna" ? "#f5c9b0"
    : variant === "colasistencia" ? "#a8c8f0"
    : "#a8ddb0"};
`;

const ConfirmBtn = styled.button`
  border: none;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5rem 1.4rem;
  border-radius: 2px;
  cursor: pointer;
  transition: filter 0.18s, transform 0.18s;
  background: ${({ variant }) =>
    variant === "escnna" ? "#e85d26"
    : variant === "colasistencia" ? "#1a5fa8"
    : "#3a7d44"};
  &:hover { filter: brightness(0.88); transform: translateY(-1px); }
`;

// ══════════════════════════════════════════════════════════════
// MODAL ESCNNA
// ══════════════════════════════════════════════════════════════
function ModalESCNNA({ onHide }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <Backdrop onClick={onHide}>
      <ModalBox onClick={(e) => e.stopPropagation()}>

        <ModalHeader variant="escnna">
          <CloseBtn onClick={onHide} aria-label="Cerrar">✕</CloseBtn>
          <HeaderIcon>🛡️</HeaderIcon>
          <ModalTitle>Certificación ESCNNA</ModalTitle>
          <ModalSubtitle>Protección de niños, niñas y adolescentes en el turismo</ModalSubtitle>
        </ModalHeader>

        <ModalBody>

          <Block variant="escnna">
            <h5>🔍 ¿Qué es la ESCNNA?</h5>
            <p>
              La <strong>Explotación Sexual Comercial de Niños, Niñas y Adolescentes (ESCNNA)</strong> es
              una de las formas más graves de vulneración de derechos humanos. En el sector turístico puede
              ocurrir de manera encubierta dentro de la cadena de servicios recreativos y de hospedaje. Por
              ello, el Ministerio de Comercio, Industria y Turismo de Colombia creó esta certificación: un
              reconocimiento oficial que distingue a los operadores que han implementado políticas activas
              de prevención, detección y denuncia.
            </p>
          </Block>

          <Block variant="escnna">
            <h5>📋 ¿Qué implica tener esta certificación?</h5>
            <p>
              Para obtener y mantener la certificación, <strong>Espeletia Trips</strong> cumple con
              estándares concretos: capacitación continua de todo nuestro equipo en identificación de
              situaciones de riesgo, adopción de un <em>Código de Conducta</em> interno, articulación
              directa con el <strong>ICBF</strong> y las autoridades competentes para la denuncia inmediata,
              y verificación de buenas prácticas en cada aliado: hospedajes, transportadores y guías locales.
            </p>
          </Block>

          <Block variant="escnna">
            <h5>🏡 ¿Por qué importa en Murillo, Tolima?</h5>
            <p>
              El ecoturismo en zonas rurales y de alta montaña atrae a familias y grupos escolares. En
              entornos donde el control formal puede ser menor, la vigilancia activa del operador cobra un
              valor decisivo. Con <strong>Espeletia Trips</strong>, padres, madres y cuidadores pueden
              confiar en que cada punto de la ruta y cada aliado ha sido evaluado bajo los parámetros
              de esta certificación.
            </p>
          </Block>

          <Block variant="escnna">
            <h5>👁️ Transparencia que puedes verificar</h5>
            <p>
              Nuestro certificado está vigente y puede consultarse en el <strong>Registro Nacional de
              Turismo</strong>. Si detectas alguna situación de alarma durante tu experiencia, nuestro
              equipo tiene el deber y el protocolo de actuar de forma inmediata. También puedes llamar
              directamente a la <strong>Línea 141 del ICBF</strong>, disponible las 24 horas.
            </p>
          </Block>

          <CommitmentBox variant="escnna">
            <p>
              "En Espeletia Trips, la naturaleza nos enseña que cada ser vivo merece protección.
              Los niños y adolescentes son nuestra prioridad absoluta: su seguridad no es opcional,
              es el corazón de lo que hacemos."
            </p>
            <span>— Equipo Espeletia Trips · Murillo, Tolima</span>
          </CommitmentBox>

        </ModalBody>

        <ModalFooter>
          <FooterBrand>Espeletia Trips · Murillo, Tolima</FooterBrand>
          <FooterRight>
            <Pill variant="escnna">🏅 Cert. ESCNNA Vigente</Pill>
            <ConfirmBtn variant="escnna" onClick={onHide}>Entendido</ConfirmBtn>
          </FooterRight>
        </ModalFooter>

      </ModalBox>
    </Backdrop>
  );
}

// ══════════════════════════════════════════════════════════════
// MODAL SELLO VERDE CORTOLIMA
// ══════════════════════════════════════════════════════════════
function ModalCortolima({ onHide }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <Backdrop onClick={onHide}>
      <ModalBox onClick={(e) => e.stopPropagation()}>

        <ModalHeader variant="cortolima">
          <CloseBtn onClick={onHide} aria-label="Cerrar">✕</CloseBtn>
          <HeaderIcon>🌿</HeaderIcon>
          <ModalTitle>Sello Verde Cortolima</ModalTitle>
          <ModalSubtitle>Turismo sostenible en el páramo de Murillo</ModalSubtitle>
        </ModalHeader>

        <ModalBody>

          <Block variant="cortolima">
            <h5>🌎 ¿Qué es el Sello Verde de Cortolima?</h5>
            <p>
              La <strong>Corporación Autónoma Regional del Tolima (Cortolima)</strong> otorga el{" "}
              <em>Sello Verde</em> a los prestadores de servicios turísticos que demuestran un compromiso
              verificable con la conservación de los ecosistemas del departamento. En el páramo de{" "}
              <strong>Los Nevados</strong>, uno de los más biodiversos del mundo, este reconocimiento
              certifica que nuestra operación no solo minimiza su impacto ambiental, sino que
              contribuye activamente a la regeneración del territorio.
            </p>
          </Block>

          <Block variant="cortolima">
            <h5>🔬 ¿Qué criterios evalúa Cortolima?</h5>
            <p>
              La certificación comprende cuatro ejes: <strong>gestión del agua</strong> (uso responsable
              en campamentos y rutas), <strong>manejo de residuos</strong> (política de cero basura en
              páramo y zonas de amortiguación), <strong>educación ambiental</strong> (inducción
              obligatoria del ecosistema antes de cada salida) y <strong>huella de carbono</strong> (rutas
              diseñadas para minimizar desplazamientos motorizados con transporte compartido local).
              Cortolima realiza visitas de seguimiento periódicas para verificar el cumplimiento continuo.
            </p>
          </Block>

          <Block variant="cortolima">
            <h5>🌸 Espeletia: la planta que nos inspira y protegemos</h5>
            <p>
              No es casualidad que llevemos el nombre del <em>frailejón</em>: esta planta endémica del
              páramo produce agua y regula el clima de toda la región. Parte de cada viaje contratado
              con nosotros se destina a proyectos comunitarios de restauración de frailejones, en
              alianza con guardabosques locales de Murillo. Viajar con <strong>Espeletia Trips</strong>{" "}
              significa dejar el páramo un poco mejor de como lo encontraste.
            </p>
          </Block>

          <Block variant="cortolima">
            <h5>🤝 Economía local y turismo regenerativo</h5>
            <p>
              El 100% de nuestros guías son habitantes de Murillo y veredas vecinas, y priorizamos
              proveedores gastronómicos y de hospedaje con productos de la despensa local. Así, cada
              experiencia fortalece la economía campesina, desincentiva la deforestación y convierte
              al viajero en un aliado de la conservación.
            </p>
          </Block>

          <Block variant="cortolima">
            <h5>📊 Rendición de cuentas ambiental</h5>
            <p>
              Publicamos anualmente nuestro <strong>Informe de Sostenibilidad</strong> con métricas
              reales: kilómetros de sendero restaurados, residuos gestionados, viajeros sensibilizados
              y jornadas de reforestación apoyadas. Puedes solicitarlo en cualquier momento: la
              transparencia ambiental es parte de nuestra identidad, no un trámite.
            </p>
          </Block>

          <CommitmentBox variant="cortolima">
            <p>
              "El páramo de Murillo es un ser vivo que nos prestó su belleza. Nuestra tarea es
              devolverla intacta —y si podemos, un poco más próspera— a quienes vengan después."
            </p>
            <span>— Equipo Espeletia Trips · Murillo, Tolima</span>
          </CommitmentBox>

        </ModalBody>

        <ModalFooter>
          <FooterBrand>Espeletia Trips · Murillo, Tolima</FooterBrand>
          <FooterRight>
            <Pill variant="cortolima">🌿 Sello Verde Cortolima Vigente</Pill>
            <ConfirmBtn variant="cortolima" onClick={onHide}>Entendido</ConfirmBtn>
          </FooterRight>
        </ModalFooter>

      </ModalBox>
    </Backdrop>
  );
}

// ══════════════════════════════════════════════════════════════
// MODAL COLASISTENCIA
// ══════════════════════════════════════════════════════════════
function ModalColasistencia({ onHide }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <Backdrop onClick={onHide}>
      <ModalBox onClick={(e) => e.stopPropagation()}>

        <ModalHeader variant="colasistencia">
          <CloseBtn onClick={onHide} aria-label="Cerrar">✕</CloseBtn>
          <HeaderIcon>🩺</HeaderIcon>
          <ModalTitle>Seguro de Viaje Colasistencia</ModalTitle>
          <ModalSubtitle>Asistencia integral para cada aventura en el páramo</ModalSubtitle>
        </ModalHeader>

        <ModalBody>

          <Block variant="colasistencia">
            <h5>🔐 ¿Qué es el seguro de viaje de Colasistencia?</h5>
            <p>
              <strong>Colasistencia</strong> es una de las aseguradoras de asistencia en viaje con mayor
              trayectoria en Colombia. Su póliza cubre a cada viajero desde el momento en que inicia la
              experiencia hasta el regreso a casa, brindando respaldo médico, logístico y de emergencia
              en destinos nacionales, incluyendo zonas de alta montaña como el{" "}
              <strong>páramo de Murillo</strong>. En <strong>Espeletia Trips</strong>, todos nuestros
              paquetes incluyen esta póliza de forma automática, sin costo adicional.
            </p>
          </Block>

          <Block variant="colasistencia">
            <h5>🏥 Asistencia médica y evacuación de emergencia</h5>
            <p>
              En caso de accidente o emergencia de salud durante la ruta, la póliza cubre{" "}
              <strong>atención médica de urgencias</strong>, traslado en ambulancia y, si las
              condiciones del terreno lo requieren, <strong>evacuación aérea</strong> desde zonas de
              difícil acceso. Nuestras rutas en páramo y alta montaña transitan por áreas remotas; por
              ello, contar con este respaldo no es un lujo, es una necesidad que asumimos por ti.
            </p>
          </Block>

          <Block variant="colasistencia">
            <h5>💊 Gastos farmacéuticos y hospitalización</h5>
            <p>
              La cobertura incluye <strong>medicamentos de urgencia</strong> prescritos durante la
              atención médica amparada, así como gastos de hospitalización hasta el monto estipulado
              en la póliza. Esto aplica tanto para accidentes ocurridos en la ruta como para
              emergencias médicas sobrevenidas durante la estadía en Murillo.
            </p>
          </Block>

          <Block variant="colasistencia">
            <h5>🧳 Pérdida de equipaje y asistencia logística</h5>
            <p>
              Si durante el traslado hacia Murillo o en el retorno se presenta{" "}
              <strong>extravío, robo o daño de equipaje</strong>, la póliza contempla una
              compensación económica según el valor declarado. Adicionalmente, en casos de
              cancelación o interrupción involuntaria del viaje por causas de fuerza mayor
              (condiciones climáticas extremas, cierre de vías), Colasistencia brinda orientación
              y asistencia logística para reencausar el plan.
            </p>
          </Block>

          <Block variant="colasistencia">
            <h5>📞 Línea de emergencias 24/7</h5>
            <p>
              Todos los viajeros asegurados tienen acceso a una <strong>central de asistencia
              disponible las 24 horas</strong>, los 7 días de la semana. Nuestros guías llevan el
              número de contacto directo y el número de póliza del grupo durante toda la expedición.
              Al reservar con nosotros, recibirás tu certificado individual de cobertura por correo
              electrónico antes de la salida.
            </p>
          </Block>

          <CommitmentBox variant="colasistencia">
            <p>
              "Queremos que tu única preocupación sea disfrutar el paisaje. El respaldo
              ante lo inesperado corre por nuestra cuenta: por eso elegimos a Colasistencia
              como nuestro aliado en cada salida."
            </p>
            <span>— Equipo Espeletia Trips · Murillo, Tolima</span>
          </CommitmentBox>

        </ModalBody>

        <ModalFooter>
          <FooterBrand>Espeletia Trips · Murillo, Tolima</FooterBrand>
          <FooterRight>
            <Pill variant="colasistencia">🩺 Póliza Colasistencia Incluida</Pill>
            <ConfirmBtn variant="colasistencia" onClick={onHide}>Entendido</ConfirmBtn>
          </FooterRight>
        </ModalFooter>

      </ModalBox>
    </Backdrop>
  );
}

// ══════════════════════════════════════════════════════════════
// EXPORT — recibe las props del padre (CertificateSection)
//
//  showESCNNA          : boolean
//  showCortolima       : boolean
//  showColasistencia   : boolean
//  onHideESCNNA        : () => void
//  onHideCortolima     : () => void
//  onHideColasistencia : () => void
// ══════════════════════════════════════════════════════════════
const CertificationModals = ({
  showESCNNA,
  showCortolima,
  showColasistencia,
  onHideESCNNA,
  onHideCortolima,
  onHideColasistencia,
}) => {
  return (
    <>
      {showESCNNA         && <ModalESCNNA         onHide={onHideESCNNA}         />}
      {showCortolima      && <ModalCortolima      onHide={onHideCortolima}      />}
      {showColasistencia  && <ModalColasistencia  onHide={onHideColasistencia}  />}
    </>
  );
};

export default CertificationModals;