function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        botReply(message.toLowerCase());
    }, 700);
}

function addMessage(text, className) {
    const chatArea = document.getElementById("chatArea");
    const div = document.createElement("div");
    div.className = className;
    div.innerHTML = text;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function botReply(msg) {
    let reply = "🤔 I’m not sure I understood that.";

    if (msg.includes("mark")) {
        reply = "✅ Your attendance has been marked successfully.";
    }
    else if (msg.includes("show") || msg.includes("view")) {
        reply = "📊 Your attendance percentage is <b>93%</b>.";
    }
    else if (msg.includes("report")) {
        reply = "📄 Attendance report generated successfully.";
    }
    else if (msg.includes("hi") || msg.includes("hello")) {
        reply = "👋 Hello! How can I help you today?";
    }

    addMessage(reply, "bot");
}
