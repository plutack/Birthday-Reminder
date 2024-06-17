// Handle successful requests
document.addEventListener("htmx:afterRequest", function (evt) {
  if (evt.detail.target.id === "result") {
    setTimeout(() => {
      evt.detail.target.innerHTML = "";
    }, 5000); 
  }
});

// Handle error responses
document.addEventListener("htmx:afterError", function (evt) {
  console.log("Error event received", evt.detail);
  if (evt.detail.target.id === "result") {
    setTimeout(() => {
      evt.detail.target.innerHTML = "Error occurred!"; // Example message
    }, 5000);
  }
});

