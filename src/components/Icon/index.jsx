import './styles.scss'

import courses from '../../assets/icons/courses.svg'
import conferences from '../../assets/icons/conferences.svg'
import workshops from '../../assets/icons/workshop.svg'
import mental from '../../assets/icons/mental.svg'
import physical_therapy from '../../assets/icons/physical_therapy.svg'
import mood from '../../assets/icons/mood.svg'
import spiritual from '../../assets/icons/spiritual.svg'
import responsability from '../../assets/icons/responsability.svg'
import excellence from '../../assets/icons/excellence.svg'
import confidentiality from '../../assets/icons/confidentiality.svg'
import active_listening from '../../assets/icons/active_listening.svg'
import resolution from '../../assets/icons/resolution.svg'
import loyalty from '../../assets/icons/loyalty.svg'
import online from '../../assets/icons/online.svg'
import access from '../../assets/icons/access.svg'
import update from '../../assets/icons/update.svg'
import certificate from '../../assets/icons/certificate.svg'
import personalized from '../../assets/icons/personalized.svg'
import material from '../../assets/icons/material.svg'
import entrepreneur from '../../assets/icons/entrepreneur.svg'
import motivational from '../../assets/icons/motivational.svg'
import author from '../../assets/icons/author.svg'
import send from '../../assets/icons/send.svg'  
import spotify from '../../assets/icons/spotify.svg'
import spotify_a from '../../assets/icons/spotify_a.svg'
import instagram from '../../assets/icons/instagram.svg'
import tiktok from '../../assets/icons/tiktok.svg'
import youtube from '../../assets/icons/youtube.svg'
import duration from '../../assets/icons/duration.svg'
import star from '../../assets/icons/star.svg'
import open from '../../assets/icons/open.svg'
import close from '../../assets/icons/close.svg'

const iconStorage = {
    courses, // Home
    conferences,
    workshops,
    mental, // About
    physical_therapy,
    mood,
    spiritual,
    responsability,
    excellence,
    confidentiality,
    active_listening,
    resolution,
    loyalty,
    open,
    close,
    online, //courses
    access,
    update,
    certificate,
    duration,
    star,
    personalized, // workshops
    material,
    entrepreneur, // conferences
    motivational,
    author,
    send, // buttons
    spotify,
    spotify_a,
    instagram,
    tiktok,
    youtube
};

// design prop available values -> "transparent" ; "white-rounded" ; "blue-rounded" ; "benefit" 
const Icon = ({ design, name }) => {
  return (
    <div className={`panambi-icon${design ? ` ${design}-icon` : ""}`}>
      <i style={{ 
				backgroundImage: `url(${iconStorage[name]})`,
			}} />
    </div>
  )
}

export default Icon;