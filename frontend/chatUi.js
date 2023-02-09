const messageForm = document.getElementById('chat-form');
messageForm.addEventListener('submit', sendMessage)

window.addEventListener('DOMContentLoaded',fetchChat)



async function sendMessage(e){
    e.preventDefault();
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

       const oldMsg =  localStorage.getItem('arr')
       let lastMsg = JSON.parse(oldMsg).length

    const newMsg  = await axios.get(`http://localhost:3000/user/message/${lastMsg}`)
  
    const mergedArray = [...JSON.parse(oldMsg),...newMsg.data.data]
   
    localStorage.setItem('arr',JSON.stringify(mergedArray))

    showChat(JSON.parse(oldMsg))

    }
     catch (error) {
        console.log(error)
    }
}


function showChat(arr){
const parent = document.getElementById('message-container');
parent.innerHTML = ' '
arr.forEach(ele => {
    const child =`<div class="message">
<span class="sender">${ele.id}:</span>
<span class="text">${ele.message_text}</span>
</div>`;
parent.innerHTML +=child;
});


}

