/*document.addEventListener('DOMContentLoaded', () => {
    function randomTime() {
        return Math.floor(Math.random() * (8000 - 1000) + 1000);
    }

    let messages = [
        "Booting up scrapper algorithm...",
        "Checking All the Files...",
        "Searching the system for passwords...",
        "Passwords Found!",
        "Deploying keylogging algorithm...",
        "Starting keylogger...",
        "Keylogger started!",
        "Keylogger - Collecting data...",
        "Collection finished!",
        "Wrapping up...",
        "Sending data to the server...",
        "Data sent successfully!"
    ];

    let terminal = document.getElementById('terminal');

    async function displayMessages() {
        for (let i = 0; i < messages.length; i++) {
            let messageContainer = document.getElementById(`message${i}`);
            if (messageContainer) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        messageContainer.innerHTML = messages[i];
                        resolve();
                    }, randomTime());
                });
            }
        }
    }

    terminal.focus();

    terminal.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            alert("Enter pressed!!");
            // Clear previous messages if needed
            for (let i = 0; i < messages.length; i++) {
                let messageContainer = document.getElementById(`message${i}`);
                if (messageContainer) {
                    messageContainer.innerHTML = "";
                }
            }
            await displayMessages();
        }
    });
});
*/

document.addEventListener('DOMContentLoaded',()=>{
    function randomTime()
    {
        let time=Math.floor(Math.random()*(7000-1000)+1000);
        return time;
    }
    let messages = [
        "Booting up scrapper algorithm...",
        "Checking All the Files...",
        "Searching the system for passwords...",
        "Passwords Found!",
        "Deploying keylogging algorithm...",
        "Starting keylogger...",
        "Keylogger started!",
        "Keylogger - Collecting data...",
        "Collection finished!",
        "Wrapping up...",
        "Sending data to the server...",
        "Data sent successfully!"
    ];
    async function loadMsg()
    {
        
        for(let i=1;i<messages.length;i++)
        {
            let msgcontainer=document.getElementById(`message${i}`);
            await new Promise((resolve) => {
                setTimeout(() => {
                    msgcontainer.innerHTML = messages[i];
                    resolve();
                }, randomTime());
            });
        }
    }
    terminal.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            let message0=document.getElementById('message0');
            message0.innerHTML="Initializing Algorithms...";
            for (let i = 1; i < messages.length; i++) {
                let messageContainer = document.getElementById(`message${i}`);
                if (messageContainer) {
                    messageContainer.innerHTML = "";
                }
            }
            await loadMsg();
        }
    });
});