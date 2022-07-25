let dadoUser = Math.floor(Math.random() * 6) + 1;
let dadoPC = Math.floor(Math.random() * 6) + 1;
let risultato = document.getElementById("risultato");

document.getElementById("dado-user").innerHTML = dadoUser;
document.getElementById("dado-pc").innerHTML = dadoPC;

if (dadoUser > dadoPC) {
  risultato.innerHTML = "Tu vince!";
  risultato.classList.add("vinto");
}
else if (dadoUser < dadoPC) {
  document.getElementById("risultato").innerHTML = "Tu perde!";
  risultato.classList.add("perso");
}
else {
  document.getElementById("risultato").innerHTML = "Pareggiare!";
  risultato.classList.add("pareggio");
}

function rilancia() {
  location.reload();
}