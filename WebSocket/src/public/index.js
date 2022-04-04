let socket = io();
let chatBox = document.getElementById('chatBox');
let log = document.getElementById('log');
let user;
Swal.fire({
    title:"Identificate!",
    input: 'text',
    allowOutsideClick: false,
    inputValidator: (value) =>{
        return !value && '¡Necesitas escribir un nombre de usuario para participar!'
    }
}).then(result=>{
    user = result.value;
}) 

chatBox.addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
            time = new Date;
            timestamp = `${time.getHours()}:${time.getMinutes()}`;
            socket.emit('message', { user, type:'message', message: chatBox.value.trim(), timestamp });
            chatBox.value=""
        }
    }
})

socket.on('log', data => {
    let messages = "";
    data.forEach(log => {
        if ((log.type === 'newUser') && (log.user !== user)) {
            messages = messages + `<b>${log.timestamp}</b> - <em>${log.user} se conectó.</em> <br>`
        } else if (log.type === 'message') {
            messages = messages + `<b>${log.timestamp}</b> - ${log.user} dice: ${log.message} <br>`
        }
    });
    log.innerHTML = messages;
})