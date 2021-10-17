import React, { useState } from "react";
import "./App.css";

const getUser = () => Promise.resolve({id: 1, name: 'Pavel'})

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input
      placeholder="search text..."
      id="search"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState('')

  useEffect(() => {
    const loadUser
  })

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      <img src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default App;