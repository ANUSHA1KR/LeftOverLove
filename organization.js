document.getElementById("orgForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("orgName").value;
  const schedule = document.getElementById("schedule").value;

  const foodPrefs = [];
  document.querySelectorAll(".checkbox-group input:checked").forEach(cb => {
    foodPrefs.push(cb.value);
  });

  const profileHTML = `
    <h3>✅ Saved Profile</h3>
    <p>🏢 Name: ${name}</p>
    <p>📅 Schedule: ${schedule}</p>
    <p>🍛 Preferred Foods: ${foodPrefs.join(", ") || "None selected"}</p>
  `;

  const profileDiv = document.getElementById("savedProfile");
  profileDiv.innerHTML = profileHTML;
  profileDiv.style.display = "block";

  // Optionally reset form
  this.reset();
});
