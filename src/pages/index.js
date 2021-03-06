import { useEffect, useState } from 'react';
import List from '../components/List.js';
import SearchBar from '../components/SearchBar';

const Homepage = () => {

  const [pairs, setPairs] = useState([]);
  const [filterField, setFilterField] = useState(undefined);
  const [filterValue, setFilterValue] = useState(undefined);
  // If preferred, it's possible to dynamically provide column values
  const [columns, setColumns] = useState(["id", "base_currency", "quote_currency"]);

  // If using Typescipt, I would create an interface to match the JSON object 
  useEffect(() => {
    const API_ENDPOINT = "https://api.exchange.coinbase.com/products";
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        setPairs(data.filter(pair => pair.status === "online"));
      })
      .catch(error => {
        console.log("Error Fetching API Data", error);
      })
  }, [])

  const handleFieldChange = (event) => {
    setFilterField(event.target.value);
  }

  const handleValueChange = (event) => {
    setFilterValue(event.target.value);
  }

  return (
    <div>
      <div className='h-screen w-screen overflow-scroll border-2'>
        {/* Awaiting API response */}
        { pairs.length > 0 ? (
          <> 
            <SearchBar fields={columns} handleFieldChange={handleFieldChange} handleValueChange={handleValueChange} />
            <List data={pairs} field={filterField} value={filterValue} columns={columns} />
          </>
        ): "API Data Loading..."}
      </div>
    </div> 
  )
}

export default Homepage;

// onClick of item, open new page with specific item details 