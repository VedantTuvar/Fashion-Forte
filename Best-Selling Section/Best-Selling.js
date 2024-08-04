document.addEventListener("DOMContentLoaded", function () {
  // Get all add-to-bag buttons
  const addToBagButtons = document.querySelectorAll(".add-to-bag");

  // Add event listener to each button
  addToBagButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Item added to cart");
    });
  });
});
