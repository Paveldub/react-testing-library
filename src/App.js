import React, { useEffect, useState } from "react";
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

export const CheckBoxComponent = ({onChange}) => {

  return (
    <>
      <input type="checkbox" onChange={onChange} />
    </>
  )
}

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser()
      setUser(user)
    }
    loadUser()
  }, [])

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleCheckboxChange = ({target}) => {
    setIsChecked(target.value)
  }

  return (
    <div>
      {user && <h2>logged in as {user.name}</h2>}
      <img src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
      <CheckBoxComponent onChange={handleCheckboxChange} />
      <p>checkbox is checked {isChecked}</p>
    </div>
  );
};

export default App;