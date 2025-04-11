document.getElementById("submitting").addEventListener("submit", submit);


function submit(event) {
    event.preventDefault();

const pass = document.getElementById("pass").value;
const confirm = document.getElementById("confirm").value;
const success = document.getElementById("success");
const notcorrect = document.getElementById("notcorrect"); // Fixed typo in variable name


    if (pass !== confirm) {
        notcorrect.textContent = "password does not match";
        notcorrect.style.color = "red";
        notcorrect.style.fontSize = "small";
        success.textContent="";
        document.querySelector("form").reset();
        
    }
    else{
        success.textContent="successfull !";
        success.style.color = "green";
        success.style.fontSize = "small";
        notcorrect.textContent="";   
        document.querySelector("form").reset();     
    }



}


function clear()
{
  
}
