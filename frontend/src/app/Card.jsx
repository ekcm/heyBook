import React from "react";
import "./Card.css";

export default function Card() {
  return (
  <div className="card flex flex-col w-60 shadow-xl">
    <figure><img src="https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg"/></figure>
    <div className="card-body">
      <h4 className="book-title card-title">Book name</h4>
      <h6 className="book-author">Author</h6>
      <p className="book-genre">Genre</p>
      <button className="btn card-btn">
        <h4>Dabao</h4>
      </button>
    </div>
  </div>
  )
}