import AppButton from '../AppButton'

import img from '../../assets/img/error/error404.webp'

import './styles.scss'

const PageNotFound = () => {
  return (
    <section className="container-fluid panambi-page-not-found">
      <img alt="page not found" src={img} />
      <AppButton
          variant={"regular"}
          as={"link"}
          design={"primary"}
          to={"/#home-cover"}
          text={"Volver al inicio"}
      />
    </section>
  )
}

export default PageNotFound;