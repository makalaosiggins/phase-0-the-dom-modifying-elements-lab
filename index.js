// Remove the main node with id "main"
const main = document.querySelector("#main");
main.remove();

// Create a new h1 node with id "victory" and set its text content
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your desired text
document.body.appendChild(newHeader);
