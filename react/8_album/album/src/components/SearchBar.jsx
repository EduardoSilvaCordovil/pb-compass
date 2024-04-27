import React from "react";

const SearchBar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const categorias = [
    "Pessoas",
    "Animais",
    "Natureza",
    "Esportes",
    "Tecnologia",
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
      <select
        onChange={(e) => {
          setCategoria(e.target.value);
          setActivateSearch(true);
        }}
      >
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
