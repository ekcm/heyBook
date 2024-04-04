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
   return "get book is working"

@app.route("/getall", methods=["GET"])
def get_all_book():
  try:
    sql = "SELECT * FROM book"
    cursor.execute(sql)
    result = cursor.fetchall()
    cursor.close()
    data = {"message": result}
    return jsonify(data), 200
  except Exception as e:
    data = {"error": str(e)}
    return jsonify(data), 500    


if __name__ == "__main__":
    app.run(debug=True, port=5000)





