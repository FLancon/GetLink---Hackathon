
// XML / POST / FETCH /




// Methode XML pour GET l'adresse des Json.
// Fonction d'envoie des Json à l'API (iTaccount)
// Fonction qui récupére tout les Json (Avec Variable qui énumére les Noms des Json)
// Function forEach pour chaque Json
// Call la fonction XML 

function reqListener() {
    console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
req.open ('get', '/API/Json/00086714.json', true)
req.send ();

function req3() {
    console.log(req);
};



// fetch("/API/Json/00086714.json")
// .then((res) => res.json())
// .then((data) => user.push(data.PERNR))











// let user = [];



// fetch("/API/Json/00086714.json")
// .then((res) => res.json())
// .then((data) => user.push(data.ObjectSID))

// fetch("/API/Json/00086714.json")
// .then((res) => res.json())
// .then((data) => user.push(data.Current_Step.Name))

// console.log(user);

// let [Matricule, Object, Name] = user;
