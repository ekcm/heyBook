from flask import Flask, request, jsonify
import mysql.connector
from dotenv import load_dotenv
import os
from flask_cors import CORS
import requests

load_dotenv()
app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
  host = os.getenv('dbhost'),
  user = os.getenv('user'),
  password = os.getenv('password'),
  database = os.getenv('database')
)

cursor = db.cursor()

@app.route("/")
def healthcheck():
   return "get book is working"

@app.route("/getall", methods=["GET"])
def get_all_book():
  try:
    sql = "SELECT * FROM book"
    cursor.execute(sql)
    result = cursor.fetchall()
    
    book_result = []
    for book in result:
        book_dict = {}
        book_dict["bookID"] = book[0]
        book_dict["book_title"] = book[1]
        book_dict["book_author"] = book[2]
        book_dict["book_genre"] = book[3]
        book_result.append(book_dict)

    data = {"message": book_result}
    return jsonify(data), 200
  except Exception as e:
    data = {"error": str(e)}
    return jsonify(data), 500    
  
@app.route("/withdraw/<int:bookID>", methods=["DELETE"])
def withdraw_book(bookID):
  try:
    get_book_sql = f"SELECT * FROM book WHERE bookID = {bookID}"
    cursor.execute(get_book_sql)
    book_data = cursor.fetchone()
    book_title = book_data[1]
    book_author = book_data[2]

    delete_sql = f"DELETE FROM book WHERE bookID = {bookID}"
    cursor.execute(delete_sql)
    if cursor.rowcount == 0:
      data = {"message": f"book with ID {bookID} not found"}
      return jsonify(data), 404  # 404 not found
    else:
      db.commit()
      data = {"message": f"book with ID {bookID} has been withdrawn"}

      # telegram
      url = "http://127.0.0.1:5001/telegram"
      message = f"{book_title} by {book_author} has been withdrawn from heyBook. We hope you enjoy it!"
      response = requests.post(url, json={"message": message})

      return jsonify(data), 200  # 200 OK
  except Exception as e:
    data = {"error": str(e)}
    return jsonify(data), 500    # 500 internal server error
  
@app.route("/deposit", methods=["POST"])
def insert_book():
  try:
    data = request.json
    book_title = data["book_title"]
    book_author = data["book_author"]
    book_genre = data["book_genre"]
    sql = "INSERT INTO book (bookTitle, bookAuthor, bookGenre) VALUES (%s, %s, %s)"
    cursor.execute(sql, (book_title, book_author, book_genre))
    db.commit()
    data = {"message": "book has been inserted"}

    # telegram
    url = "http://127.0.0.1:5001/telegram"
    message = f"A kind donor has donated {book_title} by {book_author} to heyBook. Thank you!"
    response = requests.post(url, json={"message": message})

    return jsonify(data), 200
  except Exception as e:
    return str(e)


if __name__ == "__main__":
    app.run(debug=True, port=5000)





