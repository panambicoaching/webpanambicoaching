import { useEffect, useState } from 'react'
import CoursesList from '../CoursesList'

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
      <CoursesList items={items} status={status} loaded={loaded} />
    )
  }
  
export default CoursesContainer;