const messageForm = document.getElementById('chat-form');
messageForm.addEventListener('submit', sendMessage)

window.addEventListener('DOMContentLoaded',fetchChat)



async function sendMessage(e){
    // e.preventDefault();
    try {
        const text = document.getElementById('chat-input').value;
        const dataObj = {text}
        console.log(dataObj)
        // console.log("working")
        const responce = await axios.post('http://localhost:3000/user/message',dataObj);
             console.log(responce)
             setInterval(()=>{fetchChat()},1000)
    } catch (error) {
        console.log(error)
    }
    
    
}

async function fetchChat(){
    try {
        // localStorage.setItem('arr',JSON.stringify([]))
       const oldMsg =  localStorage.getItem('arr')

       let lastMsg = JSON.parse(oldMsg).length

       let parsedarr = JSON.parse(oldMsg);
    //    console.log(lastMsg)
   
    console.log(parsedarr)
    showChat(parsedarr)

    const newMsg  = await axios.get(`http://localhost:3000/user/message/${lastMsg}`)
  
    const mergedArray = [...JSON.parse(oldMsg),...newMsg.data.data]
   
    localStorage.setItem('arr',JSON.stringify(mergedArray))

   

    }
     catch (error) {
        console.log(error)
    }
}


function showChat(arr){
const parent = document.getElementById('message-list');
parent.innerHTML = ' '
console.log(parent)
arr.forEach((obj)=> {
    const child =`<div class="message-item other-message">
    <span class="sender">${obj.id}</span>
    <p class="message-text">${obj.message_text}</p>
  </div>`
parent.innerHTML +=child;
});


}


// create-group
document.getElementById('create-group').addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById('container').style.display = "none"
 document.getElementById('group-div').style.display= "block"
    
})

async function createGroup(){
    
}