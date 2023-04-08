import "./styles.scss";

const banneryType = {
	newsletter: {
		text: "Recibí un adelanto GRATIS"
	},
	spotify: {
		text: "Escuchá gratis mi Podcast en Spotify"
	}
}

// variant prop available values -> "newsletter" ; "spotify"
const Banner = ({ variant, component }) => {
  return (
    <section className={`container-fluid panambi-${variant}-banner`}>
      <div className="container-fluid">
        <div className="banner-content">
          <div className="banner-col-left">
           <div className="text-display">{banneryType[variant].text}</div>
           {component}
          </div>
          <div className="banner-col-right">
            <picture>
                  <source media="(min-width: 576px) and (max-width: 991.98px)"
                          srcSet={`/img/banners/banner-${variant}-medium.webp`} />
                  <source media="(max-width: 575.98px)"
                          srcSet={`/img/banners/banner-${variant}-small.webp`} />

                  <img 
                    srcSet={`/img/banners/banner-${variant}-large.webp`}
                    className="banner-img"
                    alt={`Banner del ${variant} de Panambi coaching`} loading="lazy"
                  />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;