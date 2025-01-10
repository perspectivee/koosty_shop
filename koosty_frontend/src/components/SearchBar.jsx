import { CiSearch } from "react-icons/ci";
import '../index.css';

const SearchBar = () => {
  return (
    <section className="search-bar-section">
      <input className="search-bar" type="text" name="searchbar" id="searchbar" />
      <button className="search-button">
        <CiSearch className="search-icon" />
      </button>
    </section>
  )
}

export default SearchBar