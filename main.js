const firstname = document.querySelector('#user_firstname');
const email = document.querySelector('#user_email');

function validateEmail(email) {
    // une expression régulière pour valider les adresses e-mail
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const submit = document.getElementById('submit');
submit.addEventListener('click', function (){
    switch (true) {
        case firstname.value == "" && !validateEmail(email.value):
            window.alert("Oups, n'oubliez pas de remplir les champs prenom et email");
            break;
        case firstname.value == "":
            window.alert("Oups, n'oubliez pas de remplir le champs prenom");
            break;
        case !validateEmail(email.value):
            window.alert("Oups, l'email entré n'est pas valide");
            break;
        default:
            window.alert(firstname.value + " votre inscription à notre newsletter à été validée vous recevrez un mail dans quelques minutes");
    }
});

/*
  if (firstname.value == "" || email.value == validateEmail(email)) {
    window.alert("Oups vous avez du vous tromper, remplissez bien les champs requis");
    console.log(validateEmail(email));
  }else{
    window.alert(firstname.value + " votre inscription à notre newsletter à ete validé vous recevrez un mail dans quelques minutes");
  };

*/