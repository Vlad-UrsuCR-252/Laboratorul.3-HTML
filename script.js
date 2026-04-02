function proceseaza(){

let nume = document.getElementById("nume").value
let varsta = document.getElementById("varsta").value
let raspuns = document.getElementById("raspuns").value

let rezultat = document.getElementById("rezultat")

if(nume == "" || varsta == ""){
rezultat.innerHTML = "Completează toate câmpurile!"
rezultat.style.color = "red"
return
}

if(raspuns == "da"){

rezultat.innerHTML =
"Bine ai venit " + nume +
"! Se pare că știi deja despre clorofilă."

}

else{

rezultat.innerHTML =
"Bine ai venit " + nume +
"! Clorofila este pigmentul verde din plante."

}

}
