let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/notes') {
    noteTitle = document.querySelector('.note-title');
    noteText = document.querySelector('.note-textarea');
    saveNoteBtn = document.querySelector('.save-note');
    newNoteBtn = document.querySelector('.new-note');
    noteList = document.querySelector('list-container .list-group');
};

const show = (elem) => {
    elem.style.display = 'inline';
};

const hide = (elem) => {
    elem.style.display = 'none';
};
