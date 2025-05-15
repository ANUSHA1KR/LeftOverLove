document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const target = document.getElementById("feedbackFor").value;
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value.trim();

  const feedbackHTML = `
    <h3> Feedback Submitted</h3>
    <p><strong>Target:</strong> ${target}</p>
    <p><strong>Rating:</strong> ${rating}⭐</p>
    <p><strong>Comments:</strong> ${comments || "No comment"}</p>
  `;

  const display = document.getElementById("submittedFeedback");
  display.innerHTML = feedbackHTML;

  // Optionally reset form
  this.reset();
});
