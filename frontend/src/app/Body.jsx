'use client';
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Body() {
  const [cards, setCards] = useState([]);

  const deleteData = async(bookID) => {
    try {
      const url = "http://127.0.0.1:5000/withdraw/" + bookID;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data.message);
      // window.location.reload();
    }
    catch (error) {
      console.error(error);
    }
  }

  const handleDeleteCard = (bookID) => {

    console.log("Delete card with key: ", bookID)
    
    // Delete the card from the database
    deleteData(bookID);
    window.location.reload();
  }

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
        console.log(message)

        const newCards = message.map((book) => (
          <Card 
            key={book.bookID} 
            title={book.book_title} 
            author={book.book_author} 
            genre={book.book_genre} 
            onDelete={() => handleDeleteCard(book.bookID)} 
          />
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
        {/* {cards} */}
        {cards.length > 0 ? (
          cards
        ) : (
          <p>No cards available.</p>
        )}
      </div>
    </div>
  );
}
