const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

// New note create karne ka function
function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note", "h-52", "p-2", "bg-purple-800", "rounded", "flex", "flex-col", "shadow-lg", "border-b-4", "border-yellow-400");

    note.innerHTML = `
        <div class="operation p-0.5 flex justify-end gap-2 mb-0.5">
            <button class="material-icons-round edit bg-green-400 p-1 rounded hover:bg-green-600 hover:text-white transition-colors duration-75">edit_note</button>
            <button class="material-icons-round delete bg-red-600 text-white p-1 rounded hover:bg-red-700 transition-colors duration-75">delete</button>
        </div>
        <div class="noteTxt p-1 overflow-y-auto pb-4 text-white">${text}</div>
        <textarea class="p-1 outline-none border border-yellow-500 rounded resize-none w-full placeholder-gray-500 hidden" rows="6" placeholder="Type your note.."></textarea>
    `;

    const editBtn = note.querySelector(".edit");
    const delBtn = note.querySelector(".delete");
    const noteTxt = note.querySelector(".noteTxt");
    const textarea = note.querySelector("textarea");

    // Edit note
    editBtn.addEventListener("click", () => {
        noteTxt.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
        textarea.value = noteTxt.innerText;
    });

    // Save text
    textarea.addEventListener("input", (e) => {
        noteTxt.innerText = e.target.value;
    });

    // Delete note
    delBtn.addEventListener("click", () => {
        note.remove();
    });

    notesContainer.appendChild(note);
}

// Add button click
addBtn.addEventListener("click", () => addNewNote());
