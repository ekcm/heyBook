import React from "react";
import "./Card.css";

export default function Card({title, author, genre, onDelete}) {
  
  const handleDelete = () => {
    onDelete();
  }

  return (
  <div className="card flex flex-col w-60 shadow-xl">
    <figure><img src="https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg"/></figure>
    <div className="card-body">
      <h4 className="book-title card-title">{title}</h4>
      <h6 className="book-author">{author}</h6>
      <p className="book-genre">{genre}</p>
      <button className="btn card-btn" onClick={handleDelete}>
        <h4>Dabao</h4>
      </button>
    </div>
  </div>
  )
}