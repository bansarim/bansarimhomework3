// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)




/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */
function displayNewPassword () {

  let criteria = getCriteria()

  function getCriteria(){
      
    Promptpasswordlength = prompt('Choose desired password length it must be between 8 to 128')
         if (Promptpasswordlength < 8 || Promptpasswordlength > 128)
                alert('Enter Correct length of Password') 

      
      confirmpassworduppercasecharacter=confirm('Click ok to include uppercase letter')

      
      confirmpasswordincludenumericchaacter=confirm('click ok to include Numeric Values')
      
      
      confirmpasswordlowercasecharacter=confirm('Click ok to include lowercase letter?')
      
      
      confirmpasswordincludespecialcharacter=confirm('Click ok to include special character $.%,#,@')


      }
      
   let password = generatePassword(criteria)
    function generatePassword()
   {
    let length = "8"
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%#@",
    retVal = "";
      for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * 66))
      }
      return retVal
    }
    let passwordText = document.getElementById('password')
  passwordText.value = password
}

/* Your solution code goes here ... */


