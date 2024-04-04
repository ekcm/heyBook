from flask import Flask, request, jsonify
import mysql.connector
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)

db = mysql.connector.connect(
  host = os.getenv('dbhost'),
  user = os.getenv('user'),
  password = os.getenv('password'),
  database = os.getenv('database')
)

cursor = db.cursor()

@app.route("/")
def healthcheck():
   return "withdraw book is working"

@app.route("/withdraw/<int:bookID>", methods=["DELETE"])
def withdraw_book(bookID):
  try:
    sql = f"DELETE FROM book WHERE bookID = {bookID}"
    cursor.execute(sql)
    if cursor.rowcount == 0:
      data = {"message": f"book with ID {bookID} not found"}
      return jsonify(data), 404  # 404 not found
    else:
      db.commit()
      cursor.close()
      data = {"message": f"book with ID {bookID} has been withdrawn"}
      return jsonify(data), 200  # 200 OK
  except Exception as e:
    data = {"error": str(e)}
    return jsonify(data), 500    # 500 internal server error

if __name__ == "__main__":
    app.run(debug=True, port=5002)