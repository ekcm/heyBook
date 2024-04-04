from flask import Flask, request, jsonify
import mysql.connector
from dotenv import load_dotenv
import os
from flask_cors import CORS

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
   return "deposit book is working"

@app.route("/deposit", methods=["POST"])
def insert_book():
  try:
    print("ok")
    data = request.json
    book_title = data["book_title"]
    book_author = data["book_author"]
    book_genre = data["book_genre"]
    sql = "INSERT INTO book (bookTitle, bookAuthor, bookGenre) VALUES (%s, %s, %s)"
    cursor.execute(sql, (book_title, book_author, book_genre))
    db.commit()
    data = {"message": "book has been inserted"}
    return jsonify(data), 200
  except Exception as e:
    return str(e)

if __name__ == "__main__":
    app.run(debug=True, port=5001)