'use client';
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Body() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://127.0.0.1:5000/getall";
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        const message = data.message;

        const newCards = message.map((book, index) => (
          <Card key={index} title={book.book_title} author={book.book_author} genre={book.book_genre} />
        ));

        setCards(newCards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center overflow-x-auto" id="book-container">
        {cards}
      </div>
    </div>
  );
}
