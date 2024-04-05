'use client';
import React from "react";
import "./Navbar.css";

const buttonClick = async() => {
  const book_title = document.getElementById('book-title-input').value;
  const book_author = document.getElementById('book-author-input').value;
  const book_genre = document.getElementById('book-genre-input').value;

  if (book_title == "" || book_author == "" || book_genre == ""){
    document.getElementById('empty-input-warning').innerHTML = "Please fill in all fields!";
    return;
  }

  try{
    const url = "http://127.0.0.1:5000/deposit";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        book_title: book_title,
        book_author: book_author,
        book_genre: book_genre
      })
    });
    
    const data = await response.json();
    document.getElementById('empty-input-warning').innerHTML = "";
    document.getElementById('my_modal_2').close();

    // alert
    alert("Your book has been successfully deposited! Thank you for your contribution!");

    // Refresh the page
    window.location.reload();

  } catch (error) {
    console.error(error);
  }
}

const directToTelegram = async() => {
  window.location.href = 'https://t.me/+viKr-pV--H05NjY1'
}

export default function Navbar(){

  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-white">heyBook</a>
      </div>
      
      <div className="navbar-end">
        <button className="btn mr-4" id="telegram-btn" onClick={directToTelegram}>Join us on Telegram!</button>

        <button className="btn" id="deposit-btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Deposit a book!</button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello! Thank you for giving away your book!</h3>
            <p>Key in your book details here!</p>
            <div>
            <input type="text" placeholder="Book Title" className="input input-bordered w-full max-w-xs " id="book-title-input"/>
            <input type="text" placeholder="Book Author" className="input input-bordered w-full max-w-xs" id="book-author-input" />
            <input type="text" placeholder="Book Genre" className="input input-bordered w-full max-w-xs" id="book-genre-input" />
            </div>
            <div id="empty-input-warning" style={{color:"red"}}></div>
            <button className="btn" id="modal-submit-button" onClick={buttonClick}>Submit</button>
          </div>
          
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  )
}