document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const role = document.getElementById("role").value;

  if (role) {
    window.location.href = role + ".html"; // redirect to donor.html, etc
  }
});
