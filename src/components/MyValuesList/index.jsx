import Alert from 'react-bootstrap/Alert'
import MyValuesItem from '../MyValuesItem';
import Row from 'react-bootstrap/Row'

import './styles.scss'

const items = [
  {
    icon: "responsability",
    header: "Responsabilidad",
    text: "Está en la consciencia, que permite relacionar, administrar, orientar y valorar las consecuencias de sus actos. Esto se llevará a cabo y se fomentará con las personas que accedan a ser empleados o clientes de la organización."
  },
  {
    icon: "excellence",
    header: "Excelencia",
    text: "Es la calidad llevada al máximo. Si nos exigimos lo mejor, podremos dar lo mejor. Y que un cliente y un empleado vean que les ofrecemos algo excelente les impulsará a quedarse con nosotros."
  },
  {
    icon: "confidentiality",
    header: "Confidencialidad",
    text: "Es un principio ético que garantiza que la información personal será protegida para que no sea divulgada sin consentimiento de la persona."
  },
  {
    icon: "active_listening",
    header: "Escucha Activa",
    text: "Es un valor que implica libertad de expresión. Es muy importante que nuestro equipo y nuestros clientes sientan que les escuchamos y que tenemos en cuenta lo que nos dicen."
  },
  {
    icon: "resolution",
    header: "Resolución",
    text: "Es la capacidad para resolver problemas. Si consideras que una persona es resolutiva, acudirás a ella cuando tengas un problema o busques diferentes soluciones de una misma situación."
  },
  {
    icon: "loyalty",
    header: "Lealtad",
    text: "Si nos mostramos leales y fieles con nuestro equipo y nuestros clientes, ellos nos devolverán esa fidelidad. El impulso de reciprocidad está insertado en la naturaleza humana desde sus orígenes."
  }
];

const MyValuesList = () => {
  return (
    <section className={`container-fluid panambi-my-values`} id="values">
      <div className="container-lg">
        <h2>Mis valores</h2>
        <Row className="values-list">
          {
						items.length > 0
							? (<>
									{
										items.map((item) => <MyValuesItem key={`my-value-${item.icon}`} {...item} />)
									}
								</>)
							: <div className="col-12">
									<Alert variant="secondary" className="text-center fw-bold">No hay valores cargados disponibles en la API</Alert>
								</div>
					}
        </Row>
      </div>
    </section>
  );
};

export default MyValuesList;