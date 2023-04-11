import { Helmet } from 'react-helmet'

import ServicesContact from "../components/ServicesContact";

const CoursesContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contactame para cursos | Panambí coaching</title>
                <link href="https://panambicoaching.com/" rel="canonical" />
                <meta
                    content="Soy Coach profesional certificada. Brindo cursos, talleres y conferencias de coaching y coaching especializado en aviación para potenciar el crecimiento de las personas a través del desarrollo de soft skills. Mi metodología se basa en afrontar cada habilidad desde los cuatro cuerpos: mental, físico, emocional y espiritual. Responsabilidad, excelencia, confidencialidad, escucha activa, resolución y lealtad son los valores que me destacan."
                    name="description"
                />
                <meta
                    content="coaching profesional, coaching en aviación, cursos, talleres, conferencias, confidencialidad, crecimiento, habilidades blandas, soft skills, cuatro cuerpos, curso gratis, curso económico"
                    name="Keywords"
                />
            </Helmet>
            <ServicesContact variant={"courses"}/>
        </>
        
    );
}

export default CoursesContactPage;