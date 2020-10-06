let counterValue = 0;

const body = document.querySelector("body");

const counterRefs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),

  counterSpan: document.querySelector("#value"),

  incrementBtn: document.querySelector('[data-action="increment"]'),
};

console.log(counterRefs);

counterRefs.decrementBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue -= 1;
    counterRefs.counterSpan.textContent = counterValue;
  }
});

counterRefs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterRefs.counterSpan.textContent = counterValue;
});