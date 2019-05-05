var marc = {
    nom: "Marc",
    age: 15,
    moyenne: 15
};
var  Jean = {
    nom: "Jean",
    age: 18,
    moyenne: 15
};

var Andre = {
    nom: "Andre",
    age: 71,
    moyenne: 16
}
/*
ET : &&
OU : ||

SI age >= 18 ET age <= 25
    Bravo ! tu as droit au tarif JEUNE
SI NOM
    Desolé vous n'avez pas accès au tarif JEUNE
 */
if(marc.age >= 18 && marc.age <= 25){
    console.log(marc.nom, "Bravo ! tu as droit au tarif jeune")
}else {
    console.log(marc.nom, "Desolé vous n'avez pas accès au tarif JEUNE")
}

/*
ET : &&
OU : ||

SI age <= 18 ET age >= 25
     Desolé vous n'avez pas accès au tarif JEUNE
SI NOM
     Bravo ! tu as droit au tarif JEUNE
 */
if(Jean.age  >17 && Jean.age >26){
    console.log(Jean.nom, "Desolé vous n'avez pas accès au tarif JEUNE")
}else {
    console.log(Jean.nom, " Bravo ! tu as droit au tarif JEUNE")
}

/*
Combinésona des CONDITIONS
 */
if((Andre.age < 18 || Andre.age >25) && Andre.age <= 70 ){
    console.log(Andre.nom, " Bravoo! vous avez accès au tarif Reduit")
}else {
    console.log(Andre.nom, " Desolé! vous n'avez pas accès au tarif Reduit")
}