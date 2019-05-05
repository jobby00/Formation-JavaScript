/*
var i = 0;
while (i < 11){
    console.log(i);
    i = i + 1;
}
*/

for(j = 0; j < 11; j++){
    console.log(j);
    if(j == 3){
        break
    }
}

var eleves =  ['Jean', "Marie", "Marion", "Antoine"];

for ( var i = 0; i < eleves.length; i++){
    console.log('Bonjour ' + eleves[i] );
}

//Test nombre Premier
var nombre = 97;
var estPremier = true;
for(var i = 2; i < nombre; i++) {
    if(nombre % i === 0){
        estPremier = false;
        console.log("Ce nombre n'est pas premier");
        console.log(nombre + " est divisible par " + i);
    }
}

if(estPremier){
    console.log(nombre + " est un premier");
}

// Un tableau Objet
var eleves = [{
    nom: "Marc",
    age: 16,
    moyenne: 15
}, {
    nom: "Marion",
    age: 15,
    moyenne: 10
},{
    nom: "Antoine",
    age: 14,
    moyenne: 4
},{
    nom: "Harry",
    age: 16,
    moyenne: 5
}];

for(var i  = 0; i < eleves.length; i++){
    var eleve  = eleves[i];
    if(eleve.moyenne < 12){
        console.log(eleve.nom + " n'a pas la moyenne.");
    }else {
        console.log(eleve.nom + " a la MOYENNE avec " + eleve.moyenne);
    }
}



