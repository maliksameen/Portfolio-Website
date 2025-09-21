// View button click par form show hoga
function showNotesSection() {
  document.getElementById('notes-section').style.display = 'block';
}

// Form submit hote hi naya note add ho jaye
document.getElementById('noteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let title = document.getElementById('noteTitle').value;
  let content = document.getElementById('noteContent').value;

  if(title && content) {
    let li = document.createElement('li');
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #ddd";
    li.innerHTML = <strong>${title}</strong><p>${content}</p>;
    
    document.getElementById('notesList').appendChild(li);

    // reset form
    document.getElementById('noteForm').reset();
  }
});
