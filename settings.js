document.getElementById("settingsForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const roles = [];
  document.querySelectorAll(".checkbox-group input:checked").forEach(cb => {
    roles.push(cb.value);
  });

  const summary = `
    <h3>✅ Settings Saved</h3>
    <p>👤 Name: ${name}</p>
    <p>🧑‍💼 Roles: ${roles.length ? roles.join(", ") : "None selected"}</p>
  `;

  document.getElementById("savedSettings").innerHTML = summary;
});

function logoutUser() {
  alert("You've been logged out (just a mock for now).");
  window.location.href = "index.html";
}
