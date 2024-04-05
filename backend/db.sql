DROP TABLE IF EXISTS book;

CREATE TABLE book (
	bookID INT PRIMARY KEY AUTO_INCREMENT,
    bookTitle VARCHAR(255) NOT NULL,
    bookAuthor VARCHAR(255) NOT NULL,
    bookGenre VARCHAR(255) NOT NULL
);

INSERT INTO book (bookTitle, bookAuthor, bookGenre)
VALUES ('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy'),
       ('Pride and Prejudice', 'Jane Austen', 'Romance'),
       ('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 'Science Fiction'),
       ('The Martian Chronicles', 'Ray Bradbury', 'Science Fiction'),
       ('Dune', 'Frank Herbert', 'Science Fiction'),
       ('1984', 'George Orwell', 'Dystopian'),
       ('To Kill a Mockingbird', 'Harper Lee', 'Historical Fiction'),
       ('The Catcher in the Rye', 'J.D. Salinger', 'Coming-of-Age'),
       ('The Great Gatsby', 'F. Scott Fitzgerald', 'Social Commentary'),
       ('One Hundred Years of Solitude', 'Gabriel García Márquez', 'Magical Realism'),
       ('Invisible Man', 'Ralph Ellison', 'African-American Literature'),
       ('Beloved', 'Toni Morrison', 'Historical Fiction'),
       ('The Handmaid\'s Tale', 'Margaret Atwood', 'Dystopian'),
       ('Fahrenheit 451', 'Ray Bradbury', 'Dystopian'),
       ('Animal Farm', 'George Orwell', 'Political Satire'),
       ('The Lord of the Flies', 'William Golding', 'Allegory'),
       ('Brave New World', 'Aldous Huxley', 'Dystopian'),
       ('Frankenstein', 'Mary Shelley', 'Gothic Fiction'),
       ('Dracula', 'Bram Stoker', 'Gothic Horror'),
       ('Wuthering Heights', 'Emily Brontë', 'Gothic Romance'),
       ('Jane Eyre', 'Charlotte Brontë', 'Gothic Romance'),
       ('Tess of the d\'Urbervilles', 'Thomas Hardy', 'Social Realism'),
       ('Moby Dick', 'Herman Melville', 'Adventure'),
       ('The Adventures of Huckleberry Finn', 'Mark Twain', 'Satire'),
       ('The Adventures of Tom Sawyer', 'Mark Twain', 'Coming-of-Age'),
       ('Alice in Wonderland', 'Lewis Carroll', 'Fantasy'),
       ('The Jungle Book', 'Rudyard Kipling', 'Adventure'),
       ('Treasure Island', 'Robert Louis Stevenson', 'Adventure'),
       ('The Call of the Wild', 'Jack London', 'Adventure'),
       ('The Count of Monte Cristo', 'Alexandre Dumas', 'Adventure'),
       ('The Three Musketeers', 'Alexandre Dumas', 'Adventure');