import { useEffect, useState } from 'react'
import CoursesList from '../CoursesList'
import Spinner from 'react-bootstrap/Spinner';

import getDocsFirestore from '../../services/getDocsFirestore'

const CoursesContainer = ({ status }) => {
    const [items, setItems] = useState([]);
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
      loaded
        ? <CoursesList items={items} status={status} />
        : <Spinner className="panambi-spinner mx-auto" animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
    )
  }
  
export default CoursesContainer;