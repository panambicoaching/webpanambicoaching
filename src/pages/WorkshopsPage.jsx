import { Helmet } from 'react-helmet'

import GradientCover from "../components/GradientCover";
import ServicesContact from "../components/ServicesContact";

const WorkshopsPage = () => {
		return (
            <>
                <Helmet>
                    <title>Panambí coaching | Talleres de coaching</title>
                    <link href="https://panambicoaching.com/" rel="canonical" />
                    <meta
                        content="Talleres de coaching profesional presenciales y online, totalmente personalizados con material teórico y práctico, y certificado de participación. Orientados a crear metodologías de trabajo, brindar herramientas de desarrollo para mejorar las relaciones laborales, incentivando una competencia sana y generando un clima organizacional más ameno. Generarndo no sólo un cambio organizacional, sino además social, del círculo inmediato y externo de las personas."
                        name="description"
                    />
                    <meta
                        content="coaching profesional, coaching en aviación, talleres, confidencialidad, crecimiento, taller económico, Liderazgo, Motivación, Influencia - persuasión, Negociación, Trabajo en equipo, Comunicación efectiva, Toma de decisiones, Inteligencia emocional, Gestión del tiempo, Gestión del estrés, Actitud mental positiva, Sensibilización y concientización, Gestión de conflictos"
                        name="Keywords"
                    />
                </Helmet>
                <GradientCover variant={"workshops"} />
                <ServicesContact variant={"workshops"} />
            </>
        );
}

export default WorkshopsPage;