import axios from 'axios';
import React from "react";
import "./App.css";

const URL = 'http://hn.algolia.com/api/v1/search'

const App = () => {
  const [news, setNews] = useState([])
  const [error, setError] = useState(null)

  const handleFetch = async () => {
    try {
      const result = await axios.get(`${URL}?query=React`)
      setNews(result)
    } catch(error) {
      setError(error)
    }
  }

  return (
    <div>
      <button onClick={handleFetch}>Fetch News</button>
      <ul>
        {news?.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
  
      {error && <span>Somethin went wrong ... </span>}
    </div>
  );
};

export default App;