import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert'
import FAQsItem from '../FAQsItem';

import "./styles.scss";

const items = [
  {
    header: "¿Qué es el coaching ontológico profesional?",
    text: [
      'La propuesta del coaching ontológico es utilizar el lenguaje como algo generativo, es decir, creando nuevas realidades y generando acciones, entendiendo que somos seres lingüísticos. Los seres humanos se crean en sí mismos en el lenguaje y a través de él.',
      'Se trata de una conversación transformadora, donde el coach a través de preguntas, libres de juicio, genera cambios de consciencia, dándole la oportunidad al cliente de sacar sus propias conclusiones y respuestas, cambiando el punto de vista sobre algo que lo estancaba de alguna manera. Las conversaciones son absolutamente confidenciales, ya que existe un juramento de ética profesional.',
      '"Si cambiamos la forma de actuar, cambiamos la forma de ser" - Rafael Echeverría'
    ]
  },
  {
    header: "¿Puedo programar una sesión de prueba?",
    text: [
      '¡Sí! Como muchas personas no saben de qué se trata el coaching, les ofrezco una sesión gratis, otorgándoles la oportunidad de conocer mis servicios.',
      'Generalmente, mis servicios constan de 3 sesiones individuales o grupales como mínimo, para hacer un correcto seguimiento de lo aprendido, fijando objetivos a corto, mediano y largo plazo, quedando a disposición del cliente la continuidad de las sesiones.'
    ]
  },
  {
    header: "¿Qué es el coaching en aviación?",
    text: [
      'Es una rama del coaching que estoy trabajando para crear actualmente. El coaching en aviación busca priorizar al capital humano en un entorno automatizado.',
      'La diferencia entre el coaching profesional y un coaching especializado es el manejo del vocabulario, ya que el coach sabe del trabajo del coachee, tiene su mismo vocabulario, es experto en las temáticas abordadas y lo puede acompañar de una manera más rápida y con objetivos claros en su área profesional.'
    ]
  },
  {
    header: "¿Por qué el coaching en aviación?",
    text: [
      'Luego de haberme recibido de coach noté que este conocimiento podría ponerse en práctica en la empresa donde prestaba mis servicios, ya que hace más de 14 años que trabajo como controladora de tránsito aéreo y esta experiencia me ha llevado a recorrer distintas ramas del entorno aeronáutico nacional e internacional.',
      'Estas vivencias me llevaron a escribir un manual que dentro de poco publicaré detallando este nuevo aspecto del coaching, donde remarco todas aquellas técnicas que se pueden aplicar al capital humano de todas las organizaciones de la aviación y del ambiente en general.'
    ]
  }
];

const FAQsList = () => {
  return (
    <section className={`container-fluid panambi-faqs`}>
      <div className="container-md">
        <h2 className="faqs-header">Preguntas frecuentes</h2>
        <Accordion alwaysOpen flush>
          {
						items.length > 0
							? (<>
									{
										items.map((item, index) => <FAQsItem key={`faq-${index}`} {...item} id={index} />)
									}
								</>)
							: <div className="col-12">
									<Alert variant="secondary" className="text-center fw-bold">"No hay FAQs disponibles en la API"</Alert>
								</div>
					}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQsList;