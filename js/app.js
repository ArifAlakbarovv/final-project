//Note-Taking
document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.getElementById('notes-list');
    const noteForm = document.getElementById('note-form');

    noteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;
        addNoteToDOM(title, content);
        noteForm.reset();
    });

    function addNoteToDOM(title, content) {
        const noteDiv = document.createElement('div');
        noteDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="delete-note">Delete</button>
        `;
        notesList.appendChild(noteDiv);

        noteDiv.querySelector('.delete-note').addEventListener('click', function () {
            notesList.removeChild(noteDiv);
        });
    }
});
//habit
document.addEventListener('DOMContentLoaded', function () {
    const habitsList = document.getElementById('habits-list');
    const habitForm = document.getElementById('habit-form');

    habitForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const habitName = document.getElementById('habit-name').value;
        const frequency = document.getElementById('habit-frequency').value;
        addHabitToDOM(habitName, frequency);
        habitForm.reset();
    });

    function addHabitToDOM(habitName, frequency) {
        const habitDiv = document.createElement('div');
        habitDiv.innerHTML = `
            <h3>${habitName} (${frequency})</h3>
            <input type="checkbox" /> Completed
            <button class="delete-habit">Delete</button>
        `;
        habitsList.appendChild(habitDiv);

        habitDiv.querySelector('.delete-habit').addEventListener('click', function () {
            habitsList.removeChild(habitDiv);
        });
    }
});
//Task Management
document.addEventListener('DOMContentLoaded', function () {
    const tasksList = document.getElementById('tasks-list');
    const taskForm = document.getElementById('task-form');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-desc').value;
        const status = document.getElementById('task-status').value;
        addTaskToDOM(title, description, status);
        taskForm.reset();
    });

    function addTaskToDOM(title, description, status) {
        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Status: ${status}</p>
            <button class="delete-task">Delete</button>
        `;
        tasksList.appendChild(taskDiv);

        taskDiv.querySelector('.delete-task').addEventListener('click', function () {
            tasksList.removeChild(taskDiv);
        });
    }
});
//Motivational Quotes
document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ];

    const quoteBox = document.getElementById('quote-box');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteBox.innerText = quotes[randomIndex];
    }

    newQuoteBtn.addEventListener('click', displayRandomQuote);
    displayRandomQuote(); // Show an initial quote when the page loads
});
document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.getElementById('notes-list');
    const noteForm = document.getElementById('note-form');

    // Load notes from LocalStorage
    loadNotes();

    noteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;
        const newNote = { title, content };
        saveNoteToLocalStorage(newNote);
        addNoteToDOM(newNote);
        noteForm.reset();
    });

    function addNoteToDOM(note) {
        const noteDiv = document.createElement('div');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button class="delete-note">Delete</button>
        `;
        notesList.appendChild(noteDiv);

        noteDiv.querySelector('.delete-note').addEventListener('click', function () {
            deleteNoteFromLocalStorage(note.title);
            notesList.removeChild(noteDiv);
        });
    }

    function saveNoteToLocalStorage(note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function deleteNoteFromLocalStorage(title) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes = notes.filter(note => note.title !== title);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => addNoteToDOM(note));
    }
});
// Load tasks from LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// Save task to LocalStorage
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task from LocalStorage
function deleteTaskFromLocalStorage(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.title !== title);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// On page load, call `loadTasks()` to repopulate the task list
