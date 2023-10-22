// import { useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import { ImSearch } from 'react-icons/im';
 import { useNavigate } from 'react-router-dom';
 import { useQuery} from '../hooks/useQuery'

export function Search() {

  const query = useQuery();
  const search = query.get("search");

  //const [searchText, setSearchText] = useState("");
  const history = useNavigate(); //sirve para agregar la cadena del buscador a la ruta URL

  // useEffect(() =>{
  //   setSearchText(search || "");
  // },[search]);

  const handleSubmit = (e) => {
    e.preventDefault();
   //history("/?search=" + searchText);
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}> 
      <div className={styles.searchBox}> 
        <input 
          type="text"
          className={styles.searchInput}
          value={search}
          // value={searchText}
          placeholder='Title'
          aria-label='Search Movies'
          onChange={(e) => {
             const value = e.target.value;
             //setSearchText(value);
             history("/?search=" + value);
          }}
        />
        <ImSearch size={20} color="black" className={styles.searchButton}/> 
      </div>
    </form>
  );
}

