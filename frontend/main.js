const regisrationForm = document.getElementById('gotoregisterform');
regisrationForm.addEventListener('click', displayRegistrationForm)

const loginForm = document.getElementById('gotologin')
loginForm.addEventListener('click',displayLoginForm)

const login = document.getElementById('login')
login.addEventListener('submit',loginUser)

const registerForm = document.getElementById('register');
registerForm.addEventListener('submit',registerUser)

const messageForm = document.getElementById('m-form');
messageForm.addEventListener('submit', sendMessage)

// login now
document.getElementById('login-now').addEventListener('click',()=>{displayLoginForm()})

//  signup now
document.getElementById('signup-now').addEventListener('click',()=>{displayRegistrationForm()})



function displayRegistrationForm(){
    document.getElementById('login').style.display="none";
    document.getElementById('chat').style.display="none"
    document.getElementById('register').style.display="block"
}


function displayLoginForm(){
    document.getElementById('register').style.display="none"
    document.getElementById('chat').style.display="none"
    document.getElementById('login').style.display="block";
}

function displayChatUi(){
    document.getElementById('register').style.display="none"
    document.getElementById('login').style.display="none";
    document.getElementById('chat').style.display="block"
    document.getElementById('gotologin').style.display="none"
    document.getElementById('gotoregisterform').style.display="none"
  
}

async function registerUser(e){
    e.preventDefault();
    try {
        const name = document.getElementById('r-name').value;
        const email = document.getElementById('r-email').value;
        const password = document.getElementById('r-password').value;
      
        const dataObj = {name,email,password};

     const responce = await axios.post('http://localhost:3000/user/signup',dataObj)
    //  console.log(responce)
     alert(responce.data.message)
    } catch (error) {
        alert(error)
    }
 
}


async function loginUser(e){
    e.preventDefault();
    try {
        const email = document.getElementById('l-email').value;
        const password = document.getElementById('l-password').value;

        const dataObj = { email,password}

        const responce = await axios.post('http://localhost:3000/user/login',dataObj);
        console.log(responce)

        alert(responce.data.message)
        displayChatUi();
        
    } catch (error) {
       alert(error)
    }
}

 async function sendMessage(e){
    e.preventDefault();
    try {
        const text = document.getElementById('m-input').value;
        const dataObj = {text}
        const responce = await axios.post('http://localhost:3000/user/message',dataObj);
        console.log(responce)
    } catch (error) {
        console.log(error)
    }
    
    
}