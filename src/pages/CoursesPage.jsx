import { Helmet } from 'react-helmet'

import BannerContainer from "../components/BannerContainer";
import CoursesContainer from "../components/CoursesContainer";
import GradientCover from "../components/GradientCover";
import OpinionsContainer from "../components/OpinionsContainer";

const CoursesPage = () => {
		return (
      <>
        <Helmet>
          <title>Cursos de coaching profesional y especializado | Panambí coaching</title>
          <link href="https://panambicoaching.com/" rel="canonical" />
          <meta
            content="Cursos de coaching profesional presenciales y online, acceso 24/7 con actualizaciones permanentes y certificado de participación. Enfocado a personas que quieran desarrollar estas capacidades de manera personal o en forma grupal dentro de sus entornos laborales o familiares."
            name="description"
          />
          <meta
            content="coaching profesional, coaching en aviación, cursos, confidencialidad, crecimiento, curso gratis, curso económico, la importancia de conocer tus 4 cuerpos"
            name="Keywords"
          />
        </Helmet>
        <GradientCover variant="courses" />
        <CoursesContainer status="done" />
        <CoursesContainer status="next" />
        <OpinionsContainer />
        <BannerContainer variant="spotify" />
      </>
    );
}

export default CoursesPage;