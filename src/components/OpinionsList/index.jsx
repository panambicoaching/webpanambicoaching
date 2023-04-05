import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import Alert from 'react-bootstrap/Alert'

//import soon from '../../assets/soon.png'
//import MediaCard from '../MediaCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'
import OpinionCard from '../OpinionCard'

const OpinionsList = ({ items }) => {
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
