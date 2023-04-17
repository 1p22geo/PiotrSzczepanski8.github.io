let isLogged = 0;
let signStatus = "in";
const messages = document.getElementById("messages");
const main = document.querySelector("main");
function showPointer(){
main.style.cursor = "pointer";
}
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
if(accountPSWInput){
  accountPSWInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
}


const form = document.querySelector('#logging_form');
const p = document.querySelector('main > #messagesBlock')
if(form){
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    isLogged = 1;
    showMessages();
    document.getElementById("container2").style.display = "none";
    document.getElementById("container").style.display = "";
    p.remove();
    main.onclick = "null";
  });
}

const sign = document.getElementById("signUpIn");
const submit = document.getElementById("submit");
const signChoice = document.getElementById("signUpIn");
const siteTitle = document.querySelector("#container2 > #main_header > #home > p");

if(sign){
  sign.addEventListener("mouseover", function(){
    sign.style.cursor = "pointer";
  })
  sign.addEventListener("click", function (){
    if(signStatus == "in"){
      submit.value = "SIGN UP";
      signChoice.textContent = "Already have an account? SIGN IN";
      signStatus = "up";
    } else if(signStatus == "up"){
      submit.value = "SIGN IN";
      signChoice.textContent = "New to X-MAIL? SIGN UP";
      signStatus = "in";
    }
  })
}

const close1 = document.querySelector(".close");
if(close1){
  close1.addEventListener("click", function(){
  location.reload();
  })
}

const messageContainer = document.getElementById("messageContainer");
const article = document.querySelectorAll("article");

if(article){
  article.forEach(function(article){
    article.addEventListener('click', openMessage) 
  })
}


function openMessage(){
  let articleId = this.getAttribute("id");
  let articleContent = document.getElementById(articleId).innerHTML;
  window.open('message.html?articleId=' + encodeURIComponent(articleId) + '&articleContent=' + encodeURIComponent(articleContent), '_blank');
}

const params = new URLSearchParams(window.location.search);
const articleContent = params.get('articleContent');
if(articleContent){
  console.log(articleContent);
  messageContainer.innerHTML = articleContent;
}
const closeButton = document.getElementById("markAndClose");
if(closeButton){
  closeButton.addEventListener("click", function(){
    window.close();
  })
}




// function openNewWindow() {
//   const newWindow = window.open("about:blank", "_blank", "width=500,height=500");
//   const newContent = "<html><head><title>Nowa Strona</title></head><body><div id='newContent'></div></body></html>";
//   newWindow.document.write(newContent);
// }