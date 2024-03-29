import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import Alert from 'react-bootstrap/Alert'
import AppSpinner from '../AppSpinner';
import OpinionCard from '../OpinionCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'

const OpinionsList = ({ items, loaded }) => {
  return (
    <section className={`container-fluid panambi-opinions`}>
        <h2>Lo que dicen mis estudiantes</h2>
				<div className="container-fluid">
          {
            !loaded 
              ? <AppSpinner />
              : <Swiper
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
                        <OpinionCard item={item} />
                      </SwiperSlide>
                    ))
                  ) : (
                    <Alert variant="secondary" className="text-center fw-bold">No hay opiniones disponibles en la API</Alert>
                  )}
                </Swiper>
          }
          
        </div>
    </section>
  )
}

export default OpinionsList
