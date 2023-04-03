// import { useEffect, useState } from 'react'
import CoursesList from '../CoursesList'

const items = [
  {
    "id": 1,
    "date": "2023/04/01 00:00:00 GMT-03:00",
    "name": "La importancia de conocer tus 4 cuerpos",
    "description": "Te invito a aprender sobre la importancia de distinguir los 4 cuerpos para explotar de manera íntegra el ser y sacar el líder que llevas dentro.",
    "link": "https://www.youtube.com/embed/qSqVVswa420"
  },
  {
    "id": 2,
    "date": "2023/04/01 00:00:00 GMT-03:00",
    "name": "Descubre tus 4 cuerpos y empodérate",
    "img_large": "https://i.postimg.cc/SxTqL23R/c2-large.webp",
    "img_medium": "https://i.postimg.cc/jjDTMqYX/c2-medium.webp",
    "img_small": "https://i.postimg.cc/DzRTHV2K/c2-small.webp",
    "modules": 4,
    "duration": 2,
    "link": "https://lu.ma/unlink"
  },
  {
    "id": 3,
    "date": "2023/04/01 00:00:00 GMT-03:00",
    "name": "Vuelo emocional",
    "img_large": "https://i.postimg.cc/C5gVMjBP/c3-large.webp",
    "img_medium": "https://i.postimg.cc/C5spRzbF/c3-medium.webp",
    "img_small": "https://i.postimg.cc/0QLyYM6D/c3-small.webp",
    "modules": 4,
    "duration": 2,
    "link": "https://lu.ma/unlink"
  },
  {
    "id": 4,
    "date": "2023/04/01 00:00:00 GMT-03:00",
    "name": "Aprendé a meditar",
    "img_large": "https://i.postimg.cc/Nfv0LXvw/c4-large.webp",
    "img_medium": "https://i.postimg.cc/wj0xWby6/c4-medium.webp",
    "img_small": "https://i.postimg.cc/YS0rTfYQ/c4-small.webp",
    "modules": 4,
    "duration": 2,
    "link": "https://lu.ma/unlink"
  },
  {
    "id": 5,
    "date": "2023/06/13 10:30:00 GMT-03:00",
    "name": "Empodérate despertando tu amor propio",
    "img_large": "https://i.postimg.cc/4xJNQT3L/c5-large.webp",
    "img_medium": "https://i.postimg.cc/02GySN9K/c5-medium.webp",
    "img_small": "https://i.postimg.cc/4yVNBftM/c5-small.webp",
    "modules": 4,
    "duration": 2,
    "link": "https://lu.ma/unlink_vigente_id5"
  },
  {
    "id": 6,
    "date": "2023/08/10 15:00:00 GMT-03:00",
    "name": "Equilibrio personal",
    "img_large": "https://i.postimg.cc/JnyhHchR/c6-large.webp",
    "img_medium": "https://i.postimg.cc/3wq8h4FV/c6-medium.webp",
    "img_small": "https://i.postimg.cc/vB6QZYPB/c6-small.webp",
    "modules": 4,
    "duration": 2,
    "link": "https://lu.ma/unlink_vigente_id6"
  },
  {
    "id": 7,
    "date": "2023/08/23 17:45:00 GMT-03:00",
    "name": "Emoción consciente",
    "img_large": "https://i.postimg.cc/KjSmK6V5/c7-large.webp",
    "img_medium": "https://i.postimg.cc/gkKGJBKv/c7-medium.webp",
    "img_small": "https://i.postimg.cc/cL408MDP/c7-small.webp",
    "modules": 4,
    "duration": 2,
    "link": "https://lu.ma/unlink_vigente_id7"
  }
];

// import getDocsFirestore from '../../services/getDocsFirestore'

const CoursesContainer = ({ status }) => {
    /* const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    async function fetchItems() {  
      let items = await getDocsFirestore("courses");
      setItems(items);
      setLoaded(true);
    }

    useEffect(() => {
      setLoaded(false);
      fetchItems();
    }, []);
 
    return (
      loaded ? <CoursesList items={items} status={status} /> : "Cargando..."
    ) */
    
    return (
      <CoursesList items={items} status={status} />
    )
  }
  
export default CoursesContainer;