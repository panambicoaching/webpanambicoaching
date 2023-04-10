import { useEffect, useState } from 'react'
import OpinionsList from '../OpinionsList'

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
      <OpinionsList items={items} loaded={loaded} />
    )
  }
  
export default OpinionsContainer;