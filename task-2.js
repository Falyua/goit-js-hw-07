const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingregientList = document.querySelector("#ingredients");
console.log(ingregientList);

ingregientList.style.listStyle = "none";

ingredients.forEach((elem) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.textContent = elem;
  ingregientList.append(ingredientItem);
});
