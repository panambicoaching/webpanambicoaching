import { useEffect, useState } from 'react'
import OpinionsList from '../OpinionsList'
import Spinner from 'react-bootstrap/Spinner';

import getDocsFirestore from '../../services/getDocsFirestore'

const OpinionsContainer = () => {
    const [items, setItems] = useState([]);
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
      loaded 
        ? <OpinionsList items={items} />
        : <Spinner className="panambi-spinner mx-auto" animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
    )
  }
  
export default OpinionsContainer;