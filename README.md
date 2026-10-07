# Project 1: Build QuickNotes

QuickNotes is a single-page note-taking application designed to help users instantly capture, categorize, and organize their thoughts. The app saves data in the browser environment so actions like closing the browser does not change the data entered by a user. NOTE: clearing broeser data should be avoided if notes are to be saved.

## Features
1. Local storage so user doesn't lose notes after closing browser.
2. Adding and deleting notes. Users can add and delete notes.
3. Search. Users can search notes they added.
4. Note cards. Each added note is styled as a card with unique color border.
5. Mobile view.
6. Notes categories with timestamps.

## How to Run the Project Locally
1. Clone this repository to your computer using your terminal or vscode while taking note of the folder you are cloning into:
   `https://github.com/Josephleme/quicknotes-app`
2. To launch the application, move into the folder you cloned the above repo in then run the index.html file by clicking it to open in your default browser.

## What I Learned
1. Learned why some forms nowadays let you pick up from where you left from and that this data can be accessed and manipulated via devtools so it should not be used to store sensitive data.
2. Javascript must communicate with DOM to edit HTML and css properties. It cannot edit them directly using path to the HTML file.
3. User action -> update array (which should not carry sensitive info) -> save array to local storage -> render to recreate the list or whatever is being edited by using the array in local storage. Never update directly.
