const chocolateCheckboxes = document.querySelectorAll('input[type="checkbox"]');

chocolateCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", updateSelection);
});

function updateSelection() {
  const selectedChocolates = [];
  let totalPrice = 0;

  chocolateCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedChocolates.push(checkbox.value);
      totalPrice += 1; // Assuming each chocolate costs $1
    }
  });

  const selectedChocolatesElement = document.getElementById(
    "selected-chocolates"
  );
  const totalPriceElement = document.getElementById("total-price");

  selectedChocolatesElement.textContent =
    "Selected Chocolates: " + selectedChocolates.join(", ");
  totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}
