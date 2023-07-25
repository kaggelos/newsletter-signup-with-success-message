function hideMessage() {
    document.getElementById("success").style.display = 'none';
    document.getElementById("form").style.display = 'flex';
}

function showMessage() {
    document.getElementById("form").style.display = 'none';
    document.getElementById("success").style.display = 'flex';
}