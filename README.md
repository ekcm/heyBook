![image](https://github.com/ekcm/heyBook/assets/86366443/f1df0933-3672-4499-8246-11ec46e0bf6d)


<div id="top"></div>

<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">heyBook</h3>

  <p align="center">
    A Peer-to-Peer Proof-Of-Concept Book Exchange Platform! This project was completed as part of an evaluation for an internship role at <a href="https://heymax.ai">heymax.ai</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

This web application will facilitate easy listing, searching, and exchanging of books among users. This POC encourages users to donate their unwanted books and support book exchanges. 
The core features are as followed:
* Depositing of a book
* Withdrawal of a book
* Being notified of a book being deposited or withdrawn from heyBook via Telegram. Notifying a user when a new book has been deposited or withdrawn provides a much more user-friendly experience as the user does not need to keep checking the heyBook website to be kept up to date.

<!-- Quick Demo -->
### Quick Demo
https://youtu.be/fdQDjhW_JUs

### Built With
* [Python](https://www.python.org/)
* [Flask](https://flask.palletsprojects.com/en/3.0.x/)
* [Next.JS](https://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [DaisyUI](https://daisyui.com/) 
* [BeautifulSoup4](https://core.telegram.org/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.
1. Clone this repository
2. Get a free Telegram token and chat id from [Telegram](https://core.telegram.org/)
3. Edit backend/.env with your database secrets, telegram token, and telegram chat id
```
dbhost=
user=
password=
database=
telegram_token=
telegram_chat_id=
```
4. cd into backend, start both Python services first. This should start a Flask server on Port 5000 (for book.py) and Port 5001 (for telegram_service.py)
```
Python book.py
Python telegram_service.py
```
5. cd into frontend, and type npm run dev to start the web application
```
npm run dev
```

<!-- Future project extension -->
## Future project extension
Given the limited time of 24 hours to complete this project, I prioritized the core features and frontend design for the best possible user experience for a POC. If given more time, here is what I could have done better:
1. Included unit tests using pytest 
2. Included filter option and search query for frontend
3. Included a message broker (RabbitMQ) for sending messages asynchronously to Telegram API. This will help to further decouple the book service from telegram API service.




