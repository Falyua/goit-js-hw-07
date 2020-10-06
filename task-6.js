const valInput = document.getElementById("validation-input");

let length = +valInput.dataset.length;

// valInput.classList.add("invalid");

valInput.addEventListener("blur", () => {
  let textLength = valInput.value.length;

  if (length === textLength && textLength !== '') {
    valInput.classList.add("valid");
    valInput.classList.remove("invalid");
  } else {
    valInput.classList.add("invalid");
    valInput.classList.remove("valid");
  }
});
