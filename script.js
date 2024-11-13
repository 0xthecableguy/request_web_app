document.getElementById("sendButton").addEventListener("click", function() {
    const userMessage = document.getElementById("userMessage").value;
    if (userMessage.trim() !== "") {
        addMessageToChat("user", userMessage);
        document.getElementById("userMessage").value = ""; // Очистка поля ввода

        // Имитируем ответ бота
        setTimeout(() => {
            const botResponse = "Ответ: " + userMessage;
            addMessageToChat("bot", botResponse);
        }, 1000);
    }
});

function addMessageToChat(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    document.getElementById("chatContainer").appendChild(messageElement);
    document.getElementById("chatContainer").scrollTop = document.getElementById("chatContainer").scrollHeight;
}