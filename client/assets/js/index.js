const welcomeDiv = document.querySelector("#message");
const paragraph = document.createElement("p");

window.onload = () => {
  fetch("http://localhost:3030/status", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const welcomeMessage = (data && data.message) || "No message returned";
      paragraph.style.color = "blue";
      paragraph.innerText = welcomeMessage;
      welcomeDiv.appendChild(paragraph);
    })
    .catch((error) => {
      alert(error.message);
      paragraph.style.color = "red";
      paragraph.innerText = "Cors not allowed on this application!!!";
      welcomeDiv.appendChild(paragraph);
    });
};
