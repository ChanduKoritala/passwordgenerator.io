var specialCharacters = ["!", "#", "$", "&", "@", "?", "_", "%"];
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8"];
var lowerCaseCharacters = ["a","b","c", "d", "e", "f", "g", "h"];
var upperCaseCharacters = ["A","B","C","D","E","F","G", "H"];



// // Prompt to choose password options
function passwordOptions() {
var length = parseInt(prompt("Please enter the number of Characters you choose to have in your password"
));

// //condition to check if user chooses a number between 8 and 128
if (length < 8) {
prompt("Password length must be atleast 8 characters");
return;
}

if (length > 128) {
prompt("Password length must be less than 128 characters");
return;
}

// // Confirm if user requires to include speacial characters in the password 
var hasSpecialCharacters = confirm("Please click ok to include special character");

// // Confirm if user requires to include Numbers in the password
var hasNumericCharacters = confirm("Please click ok to include numbers");

// // Confirm if user requires to include Lowercase characters in the password
var hasLowerCaseCharacters = confirm("Please click ok to include Lowercase characters");

// //confirm if user requires to include Uppercase characters in the password
var hasUpperCaseCharacters = confirm("Please click ok to include Uppercase characters");

// //condition to check if user chooses atleast one option
if (hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false
    ) {
           alert ("Must choose one option")
           return;
   }

// //creating objects to store user inputs

    var getpasswordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
    };

    return getpasswordOptions;
}


// // Function for getting a random element from an array
    function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
    }
    
// //Function to generate password
function generatePassword() {
    var options = passwordOptions();

// //Array to store concatenated password
    var result = [];

// // Array to store types of characters to include in password
    var possibleCharacters = [];
  
// // Array to contain each character type
    var guaranteedCharacters = [];
  
// // Condition to concate special characters
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
  
// // Condition to concate Numeric characters
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
  
// // Condition to concate Lowercase characters
    if (options.hasLowerCaseCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
      guaranteedCharacters.push(getRandom(lowerCaseCharacters));
    }
  
// // Condition to concate Uppercase characters
    if (options.hasUpperCaseCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
      guaranteedCharacters.push(getRandom(upperCaseCharacters));
    }
  
// // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  
//  // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  
// // Transform the result into a string and pass into writePassword
    return result.join("");
  }

  var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  var copyBtn = document.querySelector("#copy");
    copyBtn.removeAttribute("disabled");
    
    copyBtn.focus();
  }


function CopyToClipboard () {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}


// // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  copyBtn.addEventListener("click",  CopyToClipboard);







