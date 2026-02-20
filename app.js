const API_URL = "/api/items"

console.log("JS cargado");
console.log("API_URL:", API_URL);

async function send() {
  const valueInput = document.getElementById("value");
  const value = valueInput.value.trim();

  console.log("Click en guardar:", value);

  if (!value) return;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value })
    });

    console.log("POST status:", res.status);

    valueInput.value = "";
    load();
  } catch (err) {
    console.error("Error en POST:", err);
  }
}

async function load() {
  console.log("Cargando datos...");

  try {
    const res = await fetch(API_URL);
    console.log("GET status:", res.status);

    const data = await res.json();
    console.log("Datos recibidos:", data);

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(item => {
      const li = document.createElement("li");
      li.className = "bg-gray-50 border px-4 py-2 rounded-lg";
      li.textContent = item.value;
      list.appendChild(li);
    });

  } catch (err) {
    console.error("Error en GET:", err);
  }
}

load();
