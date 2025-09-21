// Add Note button click -> form visible hoga
function showNotesSection() {
  document.getElementById('notes-section').style.display = 'block';
}

// Form submit -> note add hoga
document.getElementById('noteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let title = document.getElementById('noteTitle').value;
  let content = document.getElementById('noteContent').value;

  if (title && content) {
    let li = document.createElement('li');
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #ddd";
    li.innerHTML = <strong>${title}</strong><p>${content}</p>;

    document.getElementById('notesList').appendChild(li);

    // form reset
    document.getElementById('noteForm').reset();
    document.getElementById('notes-section').style.display = 'none';
  }
});
