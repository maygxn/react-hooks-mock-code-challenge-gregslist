import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings, setListings] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setListings(data))
}, [])

const removeListing = (id) => {
  setListings(listings.filter(listing => listing.id !== id))
}

const handleSearchListing = (searchedName) => {
  setSearch(searchedName)
}

const filterListings = listings.filter(listing => 
  listing.description.toLowerCase().includes(search.toLowerCase())
)
  return (
    <div className="app">
      <Header onSearch={handleSearchListing}/>
      <ListingsContainer listings={filterListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
