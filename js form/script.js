function validate() {
    var name= document.getElementById("name").value;
    var last= document.getElementById("lname").value;
    var password= document.getElementById("password").value;
    var retype= document.getElementById("retype_password").value;
    var email= document.getElementById("email").value;
    var message= document.getElementById("message").value;
    var postalcode= document.getElementById("postalcode").value;
    var error_message= document.getElementById("error_message"); 




    error_message.style.padding = "10px";
    

      var text;

   if(name.length < 5){
        text="Please Enter valid Name";
        error_message.innerHTML=text;
        return false;
    } 
    if(last.length==0){
        text="Please enter last Name";
        error_message.innerHTML=text;
        return false;
    } 
    if(password.length < 6 ){
        text="Password should be atleast 6 characters";
        error_message.innerHTML=text;
        return false;
    } 
    if(password != retype){
        text="Your password didn't match";
        error_message.innerHTML=text;
        return false;
    } 
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    } 
    if(message.length <= 140){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
      }
     if( postalcode.length!=6){
        text = "Please Enter a valid Postalcode";
        error_message.innerHTML = text;
        return false;
      }
      

      alert("Form Submitted Successfully!");
      return true; 
}


  /*  var result="";
    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validatePostalCode();

   if(result == "") return true;

    alert("Validation Result: \n\n" + result);
    return false;
    
}

function validatePassword() {
    var password = valueof("password");
    var retype = valurof("retype_password");
    if(password.length<=6)
         return "Password should be at least 6 characters .\n";
    if(password != retype)
         return "Password do not match.\n";
    return "";
}
*/