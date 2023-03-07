# expressJs-quikNotes
The note-taking application is designed to help small business owners organize their thoughts and keep track of tasks. The application is built using ExpressJS and the uuid npm package.

![quikNotes shown here*](Assets/11-express-homework-demo-01.png)

![quikNotes shown here**](Assets/11-express-homework-demo-02.png)

## Installation

Visit github and clone the ssh or http [HERE](https://cmadrid48.github.io/openVVeatherVVidget/) to install, or contribute.

To install the application, follow these steps:

```bash
git clone https://github.com/cmadrid48/expressJs-quikNotes.git [destination]
Clone the repository to your local machine.
Navigate to the project directory in the terminal.
Run npm install to install the necessary dependencies.
```
## Usage

To start the application, run node server.js in the terminal. Once the server is running, open your web browser and navigate to http://localhost:3000.

```bash
node server.js
```

### Landing Page

Upon opening the Note Taker application, you will be presented with a landing page that displays a link to the notes page.

### Notes Page

Clicking on the link to the notes page will take you to a page that displays a list of existing notes in the left-hand column and empty fields in the right-hand column to enter a new note title and note text.

### Saving Notes

When you enter a new note title and note text, a save icon will appear in the navigation at the top of the page. Clicking on the save icon will save the new note and add it to the list of existing notes in the left-hand column.

### Viewing Notes

To view an existing note, simply click on its title in the list in the left-hand column. The note will appear in the right-hand column.

### Creating New Notes
To create a new note, click on the write icon in the navigation at the top of the page. This will present you with empty fields in the right-hand column to enter a new note title and note text.

### Dependencies

This application requires the following dependencies:

ExpressJS
uuid

These dependencies are installed automatically when you run npm install.