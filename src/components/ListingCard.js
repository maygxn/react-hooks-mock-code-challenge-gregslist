import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {
const [favorited, setFavorited] = useState(false)

const toggleFavorite = () => {
  setFavorited(!favorited)
}

const renderFavoriteButton = () => {
  const buttonClass = `emoji-button favorite ${favorited ? "active" : ""}`
  return(
    <button className={buttonClass} onClick={toggleFavorite}>
      {favorited ? "★" : "☆"}
    </button>
  )
}

const handleDelete = () => {
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
  })
  .then(resp => {
    if (resp.ok) {
      removeListing(listing.id)
    }
  })
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {renderFavoriteButton()}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
