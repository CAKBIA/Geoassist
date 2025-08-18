const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
  const lower = userMessage.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (lower.includes("help")) {
    return "Sure, I can help you. Please describe your issue.";
  } else if (lower.includes("bye")) {
    return "Goodbye! 👋";
  }
  return "I'm not sure about that. Could you try rephrasing?";
}

chatSend.addEventListener("click", () => {
  const userText = chatInput.value.trim();
  if (userText) {
    appendMessage(userText, "user");
    chatInput.value = "";
    setTimeout(() => {
      const botText = getBotResponse(userText);
      appendMessage(botText, "bot");
    }, 500);
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") chatSend.click();
});