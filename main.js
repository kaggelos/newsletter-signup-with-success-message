function hideMessage() {
    document.getElementById("success").style.display = 'none';
    document.getElementById("form").style.display = 'flex';
}

function validateForm() {
   const email = document.getElementById("email");
   if (email.validity.valid) {
    document.getElementById("form").style.display = 'none';
    document.getElementById("success").style.display = 'flex';
   } else {
    document.getElementById("error").style.display = 'block';
    document.getElementById("email").style.borderColor =  'hsl(4, 100%, 67%)';
    document.getElementById("email").style.backgroundColor =  'hsla(4, 100%, 67%, 20%)';
    document.getElementById("email").style.color =  'hsl(4, 100%, 67%)';
   }
}