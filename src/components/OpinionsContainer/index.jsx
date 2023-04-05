// import { useEffect, useState } from 'react'
import OpinionsList from '../OpinionsList'

// import getDocsFirestore from '../../services/getDocsFirestore'

const opinions = [
  {
    "id": 1,
    "author_first_name": "Fabian",
    "author_last_name": "Bricks",
    "job": "Piloto aéreo",
    "stars": 5,
    "opinion": "Fue una experiencia muy enriquecedora y valiosa. Con mis compañeros aprendimos cómo mejorar nuestra comunicación y colaboración. Las herramientas que nos proporcionó nos ayudaron a establecer metas claras."
  },
  {
    "id": 2,
    "author_first_name": "Nico",
    "author_last_name": "Rinaldi",
    "job": "Controlador aéreo",
    "stars": 4,
    "opinion": "Gracias por tu tiempo y disposición, espero que hayas sacado provecho de nuestras charlas, disfruta lo que haces que es hermoso."
  },
  {
    "id": 3,
    "author_first_name": "Veronica",
    "author_last_name": "Galio",
    "job": "Coach ontológica",
    "stars": 5,
    "opinion": "Con una alegría contagiosa y una empatía increíble, Carla me brindó su amistad y su profesionalismo. Su energía, ganas de crecer y hacer, contagian y me motivan. Siempre alegre, divertida. Muy directa y  franca, hablar con ella, siempre invita a pensar nuevas posibilidades."
  },
  {
    "id": 4,
    "author_first_name": "Marcos",
    "author_last_name": "Lucchetti",
    "job": "Profesor universitario",
    "stars": 5,
    "opinion": "Una experiencia enriquecedora, donde se alcanzaron los objetivos planteados desde el principio. El trato gentil y la forma profesional para abordar los problemas hicieron del encuentro un espacio agradable para la comunicación e intercambio de ideas."
  },
  {
    "id": 5,
    "author_first_name": "Camila",
    "author_last_name": "Silva",
    "job": "-",
    "stars": 5,
    "opinion": "Gracias por la hermosa experiencia, por abrirnos camino y ayudarnos a ver lo que valemos. Lo mejor para vos, y que sigas siendo y ayudando a inspirar"
  },
  {
    "id": 6,
    "author_first_name": "Taton",
    "author_last_name": "Dandi",
    "job": "-",
    "stars": 5,
    "opinion": "Gracias por la amabilidad y la buena onda, creo que nos sirvió a todos, a ver de lo que somos capaces, y la importancia de saber trabajar en grupo. Espero que lo hayas disfrutado y que sigas motivando. ¡Gracias por tanto!"
  }
];

const OpinionsContainer = () => {
    /* const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    async function fetchItems() {  
      let items = await getDocsFirestore("opinions");
      setItems(items);
      setLoaded(true);
    }

    useEffect(() => {
      setLoaded(false);
      fetchItems();
    }, []);
 
    return (
      loaded ? <OpinionsList items={items} /> : "Cargando..."
    ) */
    
    return (
      <OpinionsList items={opinions} />
    )
  }
  
export default OpinionsContainer;