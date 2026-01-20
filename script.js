function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (text === "") return;

    addMessage(text, "user-message");
    input.value = "";

    setTimeout(() => {
        botResponse(text.toLowerCase());
    }, 800);
}

function addMessage(text, className) {
    const chatArea = document.getElementById("chatArea");
    const msg = document.createElement("div");
    msg.className = className;
    msg.innerHTML = text;
    chatArea.appendChild(msg);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function botResponse(msg) {
    let reply = "❌ Sorry, I didn’t understand. Please try again.";

    if (msg.includes("mark")) {
        reply = "✅ Attendance marked successfully for today.";
    } 
    else if (msg.includes("show") || msg.includes("view")) {
        reply = "📊 Your current attendance is <b>94%</b>.";
    } 
    else if (msg.includes("report")) {
        reply = "📄 Attendance report has been generated.";
    } 
    else if (msg.includes("hello") || msg.includes("hi")) {
        reply = "👋 Hello! How can I assist you today?";
    }

    addMessage(reply, "bot-message");
}
