document.addEventListener("DOMContentLoaded", () => {
  // Handle username display
  const username = localStorage.getItem("username");
  const userElement = document.getElementById("usernameDisplay");
  if (userElement && username) {
    userElement.textContent = `👋 Welcome, ${username}`;
  }

  // Logout handler
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "index.html"; // redirect to landing page
    });
  }

  // Dark mode toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});
