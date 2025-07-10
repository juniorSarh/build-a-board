function showDescription(text) {
  document.getElementById('modal-text').textContent = text;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}