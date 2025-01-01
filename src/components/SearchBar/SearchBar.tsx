import { useState, useCallback, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { NameData } from "../../types/name";
import styles from "./SearchBar.module.css";
import { searchName } from "../../utils/helper";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<NameData[]>([]);
  const navigate = useNavigate();

  const handleSearch = useCallback((searchTerm: string) => {
    setQuery(searchTerm);
    const results = searchName(searchTerm);
    setSuggestions(results);
  }, []);

  const handleSelect = (name: NameData) => {
    navigate(`/result/${encodeURIComponent(name.englishName)}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={handleInputChange}
        placeholder="영어 이름을 입력하세요"
      />
      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((name) => (
            <div
              key={name.englishName}
              className={styles.suggestionItem}
              onClick={() => handleSelect(name)}
            >
              {name.englishName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
