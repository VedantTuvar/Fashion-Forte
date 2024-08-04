document.addEventListener("DOMContentLoaded", function () {
  const addToBagButtons = document.querySelectorAll(".add-to-bag");

  addToBagButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Item added to cart");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addToBagButtons = document.querySelectorAll(".add-to-bag");

  addToBagButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.textContent = "✔ Added";
      button.classList.add("added-to-bag");
      button.disabled = true;
    });
  });
});

