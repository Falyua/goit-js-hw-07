const input = document.getElementById("name-input");

const span = document.getElementById("name-output");

input.addEventListener("input", () => {
  span.textContent = input.value;
  if (input.value === "") span.textContent = "Незнакомец";
});