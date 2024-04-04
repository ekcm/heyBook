import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

db = mysql.connector.connect(
  host = os.getenv('dbhost'),
  user = os.getenv('user'),
  password = os.getenv('password'),
  database = os.getenv('database')
)

cursor = db.cursor()


def get_book():
  sql = "SELECT * FROM book"
  cursor.execute(sql)
  result = cursor.fetchall()
  cursor.close()
  print(result)

get_book()





