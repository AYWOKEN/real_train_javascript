var voiture = {marque: "Mercedes", prix: "1800 €", couleur: "Noire"};

document.getElementById('marque').innerHTML = voiture.marque;
document.getElementById('prix').innerHTML = voiture.prix;
document.getElementById('couleur').innerHTML = voiture.couleur;


/////////////////////////////////////////////


var informations_personnelles = {prenom: "Awoken", nom: "dev", age: "17"};

document.getElementById('prenom').innerHTML = informations_personnelles.prenom;
document.getElementById('nom').innerHTML = informations_personnelles.nom;
document.getElementById('age').innerHTML = informations_personnelles.age;


/////////////////////////////////////////////

var langages = {
    java: "Java",
    javascript : "Javascript",
    id       : 5566,
    fullLangages : function() {
       return this.java + " " + this.javascript;
    }
};

document.getElementById("demo").innerHTML = langages.fullLangages();