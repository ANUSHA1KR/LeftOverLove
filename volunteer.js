// Simulated pickup requests
const requests = [
  {
    id: 101,
    food: "Chapati Rolls",
    donorLocation: "BTM Layout",
    receiverLocation: "NGO - Smile Foundation",
    status: "pending"
  },
  {
    id: 102,
    food: "Idli Sambar",
    donorLocation: "JP Nagar",
    receiverLocation: "Shelter Home - Hope",
    status: "picked"
  }
];

function renderRequests() {
  const list = document.getElementById("pickupList");
  list.innerHTML = "";

  requests.forEach(req => {
    const div = document.createElement("div");
    div.className = "food-card";

    div.innerHTML = `
      <h3>${req.food}</h3>
      <p>📤 From: ${req.donorLocation}</p>
      <p>📥 To: ${req.receiverLocation}</p>
      <p>🚦 Status: <strong>${req.status.toUpperCase()}</strong></p>
      ${req.status === "pending" ? `<button onclick="markPicked(${req.id})">Mark as Picked Up</button>` : ""}
      ${req.status === "picked" ? `<button onclick="markDelivered(${req.id})">Mark as Delivered</button>` : ""}
    `;

    list.appendChild(div);
  });
}

function markPicked(id) {
  const req = requests.find(r => r.id === id);
  req.status = "picked";
  alert(`📦 ${req.food} marked as Picked Up`);
  renderRequests();
}

function markDelivered(id) {
  const req = requests.find(r => r.id === id);
  req.status = "delivered";
  alert(`✅ ${req.food} marked as Delivered`);
  renderRequests();
}

renderRequests();