import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // history("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          placeholder="Buscar"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            history("/?search=" + value);
          }}
        />
          <FaSearch size={20} color="rgba(0, 0, 0, 0.851)" className={styles.searchButton}/>
      </div>
    </form>
  );
}
