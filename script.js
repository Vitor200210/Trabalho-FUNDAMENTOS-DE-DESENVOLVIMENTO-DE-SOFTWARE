document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.getElementById('messageButton');
    const messageContainer = document.getElementById('messageContainer');
    
    const messages = [

        "Cada dia é uma nova oportunidade para aprender e crescer.",
    ];
    
    messageButton.addEventListener('click', function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageContainer.textContent = randomMessage;
        messageContainer.style.display = 'block';
        
    });
});
