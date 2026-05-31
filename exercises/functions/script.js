// ============================================================
// EXERCISE: Functions & Parameters — SOLUTION
// ============================================================

// Formats a price with a currency symbol
function formatPrice(amount, currency) {
  console.log(`${currency} ${amount.toFixed(2)}`);
}

formatPrice(9.9, "CHF"); // → CHF 9.90
formatPrice(4.5, "EUR"); // → EUR 4.50

// TODO 1: call formatPrice() with a price of your choice
formatPrice(24.99, "CHF");

// TODO 2: define a function called discount
function discount(price, percent) {
  const reduced = price - (price * percent) / 100;
  console.log(`Price after discount: CHF ${reduced.toFixed(2)}`);
}

// TODO 3: call discount() with two different examples
discount(100, 20); // → Price after discount: CHF 80.00
discount(49.99, 10);
