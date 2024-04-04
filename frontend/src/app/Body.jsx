'use client';
import React from "react";
import Card from "./Card";

const onButtonClick = async() => {
  console.log("button clicked")

  try{
    var url = "http://127.0.0.1:5000/getall"
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);

  }catch(error){
    console.error(error);
  }
}

export default function Body() {
  return (
    <div>
      <div>
        <button className="btn btn-info" onClick={onButtonClick}>Info</button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      
    </div>
  )
}