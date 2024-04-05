from flask import Flask, request, jsonify
import mysql.connector
from dotenv import load_dotenv
import os
from flask_cors import CORS
import requests

load_dotenv()
app = Flask(__name__)
CORS(app)

@app.route("/telegram", methods=["POST"])
def send_telegram_message():
    token = os.getenv('telegram_token')
    chat_id = os.getenv('telegram_chat_id')
    data = request.get_json()
    message = data["message"]
    url = f"https://api.telegram.org/{token}/sendMessage?chat_id=-{chat_id}&text={message}"
    response = requests.get(url)
    return response.json()

if __name__ == "__main__":
    app.run(debug=True, port=5001)