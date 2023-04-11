import { Helmet } from 'react-helmet'

import AboutMe from "../components/AboutMe";
import AboutUsCover from "../components/AboutUsCover";
import BannerContainer from "../components/BannerContainer";
import FAQsList from "../components/FAQsList";
import FourBodies from "../components/FourBodies";
import Manual from "../components/Manual";
import MyValuesList from "../components/MyValuesList";

const AboutPage = () => {
  return (
    <>
			<Helmet>
        <title>Acerca de | Panambí coaching</title>
        <link href="https://panambicoaching.com/" rel="canonical" />
        <meta
          content="Soy Controladora de tránsito aéreo y Coach profesional certificada. Brindo cursos, talleres y conferencias de coaching y coaching especializado en aviación para potenciar el crecimiento de las personas a través del desarrollo de soft skills. Mi metodología se basa en afrontar cada habilidad desde los cuatro cuerpos: mental, físico, emocional y espiritual. Responsabilidad, excelencia, confidencialidad, escucha activa, resolución y lealtad son los valores que me destacan."
          name="description"
        />
        <meta
          content="coaching profesional, coaching en aviación, cursos, talleres, conferencias, confidencialidad, crecimiento, habilidades blandas, softs skills, cuatro cuerpos, curso gratis, curso económico"
          name="Keywords"
        />
      </Helmet>
      <AboutUsCover />
      <FourBodies />
      <MyValuesList />
      <AboutMe />
      <Manual />
      <BannerContainer variant="newsletter" />
      <FAQsList />
    </>
  );
};

export default AboutPage;
