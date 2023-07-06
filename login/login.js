let email = document.querySelector("[name=email]") 
let password = document.querySelector("[name=password]") 


let closedeyeM = document.querySelector("[name=closedM]") 
let openedeyeM = document.querySelector("[name=openedM]") 

let closedeyeP = document.querySelector("[name=closedP]") 
let openedeyeP = document.querySelector("[name=openedP]") 


openCloseEyePassword = () =>
closedeyeP.addEventListener( "click", () =>
{
closedeyeP.style.display = "none";
openedeyeP.style.display = "block";
document.getElementById('pass').type = 'text';
})

openedeyeP.addEventListener( "click", () =>
{
openedeyeP.style.display = "none";
closedeyeP.style.display = "block";
document.getElementById('pass').type = 'password';
})


document.forms[0].onsubmit = (e) =>
{
    let emailValue = false ;
    let passValue = false; 
     if((email !== '') && (email.value.includes("@")) && (email.value.includes(".")))
     {
        emailValue = true;
     }
     if ((password.value.length >= 8) )
     {
        passValue = true;
     }
    
     if ((emailValue == false) )
        { 
           
            document.querySelector(".email-error").innerHTML = "Please enter a  valid email";
            document.querySelector(".email-error").style.backgroundColor = "#FFE0E0";            
            e.preventDefault()
        } 

        if ((emailValue == true) )
        { 
           
            document.querySelector(".email-error").style.display = "none";            
             
        } 
    
        if (( passValue == false) )
        {
           
            document.querySelector(".password-error").innerHTML = "Please enter a  valid password";
          
            document.querySelector(".password-error").style.backgroundColor = "#FFE0E0";      
            e.preventDefault()
                  
        }

        if ((passValue == true) )
        { 
           
            document.querySelector(".password-error").style.display = "none";            
            
        } 
e.preventDefault()
}
  
openCloseEyePassword()
   