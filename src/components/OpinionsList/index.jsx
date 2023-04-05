import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import Alert from 'react-bootstrap/Alert'

//import soon from '../../assets/soon.png'
//import MediaCard from '../MediaCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'
import OpinionCard from '../OpinionCard'

const opinions = [
  {
    "id": 1,
    "author": "Fabian Bricks",
    "job": "Piloto aéreo",
    "stars": 5,
    "opinion": "Fue una experiencia muy enriquecedora y valiosa. Con mis compañeros aprendimos cómo mejorar nuestra comunicación y colaboración. Las herramientas que nos proporcionó nos ayudaron a establecer metas claras."
  },
  {
    "id": 2,
    "author": "Nico Rinaldi",
    "job": "Controlador aéreo",
    "stars": 4,
    "opinion": "Gracias por tu tiempo y disposición, espero que hayas sacado provecho de nuestras charlas, disfruta lo que haces que es hermoso."
  },
  {
    "id": 3,
    "author": "Veronica Galio",
    "job": "Coach ontológica",
    "stars": 5,
    "opinion": "Con una alegría contagiosa y una empatía increíble, Carla me brindó su amistad y su profesionalismo. Su energía, ganas de crecer y hacer, contagian y me motivan. Siempre alegre, divertida. Muy directa y  franca, hablar con ella, siempre invita a pensar nuevas posibilidades."
  },
  {
    "id": 4,
    "author": "Marcos Lucchetti",
    "job": "Profesor universitario",
    "stars": 5,
    "opinion": "Una experiencia enriquecedora, donde se alcanzaron los objetivos planteados desde el principio. El trato gentil y la forma profesional para abordar los problemas hicieron del encuentro un espacio agradable para la comunicación e intercambio de ideas."
  },
  {
    "id": 5,
    "author": "Camila Silva",
    "job": "-",
    "stars": 5,
    "opinion": "Gracias  por la hermosa experiencia, por abrirnos camino y ayudarnos a ver lo que valemos. Lo mejor para vos, y que sigas siendo y ayudando a inspirar"
  },
  {
    "id": 6,
    "author": "Taton Dandi",
    "job": "-",
    "stars": 5,
    "opinion": "Gracias por la amabilidad y la buena onda, creo que nos sirvió a todos, a ver de lo que somos capaces, y la importancia de saber trabajar en grupo. Espero que lo hayas disfrutado y que sigas motivando. ¡Gracias por tanto!"
  }
];

const OpinionsList = ({ items = opinions }) => {
  return (
    <section className={`container-fluid panambi-opinions`}>
				<div className="container">
          <h2>Lo que dicen mis estudiantes</h2>
          
          <Swiper
            className="panambi-swiper"
            keyboard={{
              enabled: true,
            }}
            modules={[Keyboard]}
            slidesPerView={'auto'}
            spaceBetween={24}
          >
            {items.length > 0 ? (
              items.map((item) => (
                <SwiperSlide key={`opinion-${item.id}`}>
                  {/* <MediaCard {...item} categoria={category.nombre} tipo={category.tipo} /> */}
                  <OpinionCard item={item} />
                </SwiperSlide>
              ))
            ) : (
              <Alert variant="secondary" className="text-center fw-bold">No hay opiniones disponibles en la API</Alert>
            )}
          </Swiper>
        </div>
    </section>
  )
}

export default OpinionsList
