import './styles.scss'

import courses from '../../assets/icons/courses.svg'
import conferences from '../../assets/icons/conferences.svg'
import workshop from '../../assets/icons/workshop.svg'
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

const iconStorage = {
  courses, // Home
  conferences,
  workshop,
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
  online, //courses
  access,
  update,
  certificate,
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
}

// design prop available values -> "transparent" ; "white-rounded" ; "blue-rounded" ; "benefit" 
const Icon = ({ design, name }) => {
  return (
    <div className={`panambi-icon ${design ? `${design}-icon` : ""}`}>
      <img src={iconStorage[name]} alt={name} style={{color: "red"}}/>
    </div>
  )
}

export default Icon;