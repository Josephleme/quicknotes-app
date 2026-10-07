const noteForm = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const noteCategory = document.querySelector('#note-category');
const notesList = document.querySelector('#notes-list');
const noteCount = document.querySelector('#note-count');
const errorMessage = document.querySelector('#error-message');
const searchInput = document.querySelector('#search-input');

let notes = [];

function loadNotes() {
    const saved = localStorage.getItem("quicknotes-data");
    return saved ? JSON.parse(saved) : [];
}

function saveNotes() {
    localStorage.setItem("quicknotes-data", JSON.stringify(notes));
}

notes = loadNotes();

function render() {
    notesList.innerHTML = "";

    notes.forEach(note => {
        const li = document.createElement("li");
        li.classList.add("note-card");

        if (note.category === "Personal") {
            li.classList.add("category-personal");
        } else if (note.category === "Work") {
            li.classList.add("category-work");
        } else if (note.category === "Study") {
            li.classList.add("category-study");
        }

        const textSpan = document.createElement("span");
        textSpan.textContent = note.text;

        const categoryLabel = document.createElement("span");
        categoryLabel.textContent = ` [${note.category}]`;
        categoryLabel.style.fontSize = "14px";
        categoryLabel.style.color = "#666";

        const dateSpan = document.createElement("span");
        dateSpan.textContent = ` (${note.createdAt})`;
        dateSpan.style.fontSize = "12px";
        dateSpan.style.color = "#999";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => deleteNote(note.id));

        li.appendChild(textSpan);
        li.appendChild(categoryLabel);
        li.appendChild(dateSpan);
        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
    if (notes.length === 0) {
        noteCount.textContent = "You have no notes yet.";
    } else if (notes.length === 1) {
        noteCount.textContent = "You have 1 note.";
    } else {
        noteCount.textContent = `You have ${notes.length} notes.`;
    }
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    render();
}

noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const text = noteInput.value.trim();
    const category = noteCategory.value;
    
    if (text === "") {
        errorMessage.textContent = "Please type a note first.";
        return;
    }
    
    if (text.length > 200) {
        errorMessage.textContent = "Notes must be 200 characters or fewer.";
        return;
    }
    
    errorMessage.textContent = "";
    
    const now = new Date();
    const timestamp = now.toLocaleString();
    
    const newNote = {
        id: Date.now(),
        text: text,
        category: category,
        createdAt: timestamp
    };
    
    notes.push(newNote);
    saveNotes();
    render();
    
    noteInput.value = "";
    noteInput.focus();
});

render();


