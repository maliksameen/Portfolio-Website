// Add new note button par click hone par naya note create hoga
document.getElementById("addBtn").addEventListener("click", function () {
  let notesContainer = document.getElementById("notesContainer");

  // Note ka outer div
  let note = document.createElement("div");
  note.classList.add(
    "note",
    "h-52",
    "p-2",
    "bg-purple-800",
    "rounded",
    "flex",
    "flex-col",
    "shadow-lg",
    "border-b-4",
    "border-yellow-400"
  );

  // Edit/Delete buttons wala div
  let operation = document.createElement("div");
  operation.classList.add("operation", "p-0.5", "flex", "justify-end", "gap-2", "mb-0.5");

  let editBtn = document.createElement("button");
  editBtn.classList.add("material-icons-round", "edit", "bg-green-400", "p-1", "rounded", "hover:bg-green-600", "hover:text-white");
  editBtn.textContent = "edit_note";

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("material-icons-round", "delete", "bg-red-600", "text-white", "p-1", "rounded", "hover:bg-red-700");
  deleteBtn.textContent = "delete";

  operation.appendChild(editBtn);
  operation.appendChild(deleteBtn);

  // Note text area
  let noteTxt = document.createElement("div");
  noteTxt.classList.add("noteTxt", "p-1", "overflow-y-auto", "pb-4", "text-white");

  let textarea = document.createElement("textarea");
  textarea.classList.add("p-1", "outline-none", "border", "border-yellow-500", "rounded", "resize-none", "w-full", "placeholder-gray-500");
  textarea.setAttribute("rows", "6");
  textarea.setAttribute("placeholder", "Type your note..");

  // Append sabko
  note.appendChild(operation);
  note.appendChild(noteTxt);
  note.appendChild(textarea);

  notesContainer.appendChild(note);
});
