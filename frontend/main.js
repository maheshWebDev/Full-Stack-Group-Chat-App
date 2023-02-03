const regisrationForm = document.getElementById('gotoregisterform');
regisrationForm.addEventListener('click', displayRegistrationForm)

const registerForm = document.getElementById('register');
registerForm.addEventListener('submit',registerUser)


function displayRegistrationForm(){
    document.getElementById('register').style.display="block"
}



async function registerUser(e){
    e.preventDefault();
    try {
        const name = document.getElementById('r-name').value;
        const email = document.getElementById('r-email').value;
        const password = document.getElementById('r-password').value;
      
        const obj = {
          name,email,password
        };

     const responce = await axios.post('http://localhost:3000/user/signup',obj)
    //  console.log(responce)
     alert(responce.data.message)
    } catch (error) {
        alert(error)
    }
 
}