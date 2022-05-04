let email = "";

function input_length (string) {
let isValid = string.length > 4 && email.length < 65
return isValid ? false : console.log('В поле ввести от 5 до 64 символов');
}

function words_small (string) {
    let isValid = /[a-z]/g.test(string)
    return isValid ? false : console.log("В поле необходимо ввести латинские символы") ; 
    
  }

function words_big (string) {
    let isValid = /[A-Z]/g.test(string) 
    return isValid ? false : console.log("В поле необходимо ввести одну большую букву") ;
     
  }

function numbers (string) {
   let isValid = /\d/g.test(string) 
   return isValid ? false : console.log("В поле необходимо ввести одну цифру") ;
}      
    
function symbol (string) {
    let  isValid = /@/g.test(string)
    return isValid ? false : console.log( "В поле необходимо ввести символ - @ ") ;
  
}

function isEmpty (string) {
    let isValid = string.length != 0 
    return isValid ? false : console.log("Строка не должна быть пустой") ;
   
}

function validation(string) {
  let valid_results = [];
  
  valid_results.push(input_length(string))
  valid_results.push(words_small(string))
  valid_results.push(words_big(string))
  valid_results.push(numbers(string))
  valid_results.push(symbol(string))
  valid_results.push(isEmpty(string))

valid_results.includes(undefined) ? console.log('   --- Исправьте строку ---') : console.log('OK') 

}

validation(email)
