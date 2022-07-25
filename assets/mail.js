const mailList = ["pippo@gmail.com", "albid@gmail.com", "albertone@gmail.com"];
let emailCheck = false;
let validazione = document.getElementById("mail-check");
let bottoneRiprova = document.getElementById("riprova");

function controlla() {
  let email = document.getElementById("email").value;

  for (i=0; i < mailList.length; i++) {
    if (mailList[i]==email) {
      emailCheck = true;
    }
  }

  if (emailCheck) {
    validazione.innerHTML = "Mail verificata, benvenuto!";
    validazione.classList.add("valida");
  }
  else {
    validazione.innerHTML = "Accesso negato!";
    validazione.classList.add("non-valida");
    bottoneRiprova.classList.remove("hidden");
  }
}

function riprova() {
  location.reload();
}