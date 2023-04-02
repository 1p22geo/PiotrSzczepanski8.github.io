let isLogged = 0;
const messages = document.getElementById("messages");
function showMessages(){
    if(isLogged == 1){
        messages.style.display = "";
    } else {
        messages.style.display = "none";
        document.querySelector("main > p").textContent = "Your messages will appear when you log in";
        document.querySelector("main > p").style.display = "flex";
        document.querySelector("main > p").style.justifyContent = "center";
        document.querySelector("main > p").style.fontSize = "2rem";
        document.querySelector("main > p").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        const main = document.querySelector("main");
        main.addEventListener("mouseover", function(){
        main.style.cursor = "pointer";
        });
    }
}

function toLogging(){
    document.getElementById("container2").style.display = "block";
    document.getElementById("container").style.display = "none";
}

function showPassword(){
    const element = document.getElementById("accountPSW");
    if (element.type === "password") {
      element.type = "text";
    } else {
      element.type = "password";
    }
}

function hideLogging(){
    document.getElementById("container2").style.display = "none";
}

const accountPSWInput = document.getElementById("accountPSW");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit");
function validateForm() {
  if (accountPSWInput.checkValidity() && emailInput.checkValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
accountPSWInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);

const form = document.querySelector('#logging_form');
const p = document.querySelector('main > p')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    isLogged = 1;
    showMessages();
    document.getElementById("container2").style.display = "none";
    document.getElementById("container").style.display = "";
    p.remove();
    main.removeEventListener("mouseover", function(){
        main.style.cursor = "pointer";
    });
    window.addEventListener("mouseover", function(){
        window.style.cursor = "default";
    })
    main.onclick = "null";
});