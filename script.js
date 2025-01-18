// script.js
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const errorText = document.getElementById("error");
const chatButton = document.getElementById("chatBtn"); // Reference to the chat button

// Define passwords and their corresponding pages (updated with your new pages)
const passwordPages = {
  "010304": "https://nxil.carrd.co",  // Carrd page 1 URL
  "235754": "https://reagxn.carrd.co/"   // Carrd page 2 URL
};

// Password validation logic
submitButton.addEventListener("click", () => {
  const enteredPassword = passwordInput.value.trim();

  if (passwordPages[enteredPassword]) {
    // Redirect to the corresponding Carrd page
    window.location.href = passwordPages[enteredPassword];
  } else {
    // Show error message if password is incorrect
    errorText.classList.remove("hidden");
  }
});

// Chat button click event - redirect to the chat page
chatButton.addEventListener("click", () => {
  window.location.href = "chat.html"; // Open the chat page
});

