let socket = io()
let user = ''
let chatBox = document.getElementById('chatbox')

swal.fire({
    title: 'Identificate',
    input: 'text' ,
    text: 'Pone tu nombre para identificarte',
    inputValidator: value => {
    return !value.trim() && 'Pleace. Write a username!'
},
allowOutsideClick: false
}) .then( result => {
        user = result.value
        document.getElementById('username').innerHTML = user
    })
         
    // enviamos mensaje
  chatBox.addEventListener('keyup', event =>{
    if(event.key === 'Enter') {
        if(chatBox.value.trim().length > 0) {
            socket.emit('message', {
                user,
                message: chatBox.value
            })

            chatBox.value = ''
        }
    }
  })
    // recibir Menasajes
    socket.on('logs', data => {
        const divLog = document.getElementById('messageLogs')
        let messages = ''

        data.reverse().forEach(message => {
            messages += `<p><i>${message.user}</i>: ${message.message}</p>`
        });
        divLog.innerHTML = messages

    })