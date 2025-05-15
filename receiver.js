// Simulated food data (later can come from Firebase)
const foodItems = [
  {
    id: 1,
    name: "Veg Biryani",
    quantity: 4,
    location: "MG Road",
    expiry: "2025-05-16T14:00",
  },
  {
    id: 2,
    name: "Pasta Packets",
    quantity: 2,
    location: "Indira Nagar",
    expiry: "2025-05-15T20:00",
  }
];

function renderFoodList() {
  const foodList = document.getElementById("foodList");
  foodItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "food-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>🍽️ Servings: ${item.quantity}</p>
      <p>📍 Location: ${item.location}</p>
      <p>⏰ Expires: ${new Date(item.expiry).toLocaleString()}</p>
      <button onclick="claimFood(${item.id})">Claim</button>
    `;
    foodList.appendChild(div);
  });
}

function claimFood(id) {
  const food = foodItems.find(item => item.id === id);
  alert(`✅ You claimed: ${food.name}`);
  console.log("Claimed food:", food);
}

renderFoodList();
