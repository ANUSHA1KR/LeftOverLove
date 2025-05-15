document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("supportForm");
  const messageBox = document.getElementById("supportMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("supportName").value.trim();
    const email = document.getElementById("supportEmail").value.trim();
    const message = document.getElementById("supportMessage").value.trim();

    if (!name || !email || !message) {
      showMessage("Please fill in all fields.", "red");
      return;
    }

    try {
      // For now we'll just show a success message (this can be a POST to backend in real app)
      showMessage("Thanks for reaching out! We'll get back to you soon.", "green");

      form.reset();
    } catch (error) {
      console.error("Error sending support message:", error);
      showMessage("Something went wrong. Please try again later.", "red");
    }
  });

  function showMessage(msg, color = "green") {
    messageBox.textContent = msg;
    messageBox.style.color = color;
    messageBox.style.marginTop = "1rem";
  }
});
