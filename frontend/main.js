const regisrationForm = document.getElementById('gotoregisterform');
regisrationForm.addEventListener('click', displayRegistrationForm)

const loginForm = document.getElementById('gotologin')
loginForm.addEventListener('click',displayLoginForm)

const login = document.getElementById('login')
login.addEventListener('submit',loginUser)

const registerForm = document.getElementById('register');
registerForm.addEventListener('submit',registerUser)


// login now
document.getElementById('login-now').addEventListener('click',()=>{displayLoginForm()})

//  signup now
document.getElementById('signup-now').addEventListener('click',()=>{displayRegistrationForm()})



function displayRegistrationForm(){
    document.getElementById('login').style.display="none";
  
    document.getElementById('register').style.display="block"
}


function displayLoginForm(){
    document.getElementById('register').style.display="none"
    
    document.getElementById('login').style.display="block";
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
    
        alert(error.response.data.message)
        
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
        window.location.href='chatUi.html' 
        
    } catch (error) {
       alert(error)
    }
}
