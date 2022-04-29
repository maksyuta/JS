
let email = "aaaS5@aa";

function dlina () {
 if (email.length < 5 || email.length > 64) 
    {return false}
   
else  {return true}
}

function bukvi_mal () {
    if (email.match(/[a-z]/)) {
        return true
    }
    else {return false} 
}

function bukvi_bolshie () {
    if (email.match(/[A-Z]/)) {
        return true
    }
    else {return false} 
  }

function cifri () {
    if (email.match(/[0-9]/)) {
        return true
    }
    else {return false} 
    
}
function sobaka () {
    if (email.match(/[@]/)) {
        return true
    }
    else {return false}
  }

function isEmpty () {
    if (email.length != 0) {
        return true
    }
    else {return false} 
   
}


function validation () {
    if (isEmpty() != true) {
        console.log("Поле не должно быть пустым")
    }
    else if (dlina() != true) {
        console.log("В поле необходимо ввести от 5 до 64 символов")
    }
    else if (bukvi_mal() != true) {
        console.log("В поле необходимо ввести латинские символы")
    }
    else if (bukvi_bolshie() != true) {
        console.log("В поле необходимо ввести одну большую букву")
    }
    else if (cifri() != true) {
        console.log("В поле необходимо ввести одну цифру")
    }
    else if (sobaka() != true) {
        console.log("В поле необходимо ввести символ - @ ")
    }
    
    else {console.log("OK") }
 }

validation();
