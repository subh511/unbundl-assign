// Get all chocolate checkboxes
const chocolateCheckboxes = document.querySelectorAll('input[type="checkbox"]');

// Listen for checkbox change events
chocolateCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", updateSelection);
});

// Function to update the selected chocolates and total price
function updateSelection() {
  const selectedChocolates = [];
  let totalPrice = 0;

  // Get the selected chocolates and calculate the total price
  chocolateCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedChocolates.push(checkbox.value);
      totalPrice += 1; // Assuming each chocolate costs $1
    }
  });

  // Update the selected chocolates and total price in the UI
  const selectedChocolatesElement = document.getElementById(
    "selected-chocolates"
  );
  const totalPriceElement = document.getElementById("total-price");

  selectedChocolatesElement.textContent =
    "Selected Chocolates: " + selectedChocolates.join(", ");
  totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}