// ============================================================
// EXERCISE: Functions & Parameters
// ============================================================
//
// Open the browser console to see your results.
// (Right-click the page → Inspect → Console)
//
// ============================================================

// Formats a price with a currency symbol
function formatPrice(amount, currency) {
  console.log(`${currency} ${amount.toFixed(2)}`);
}

formatPrice(9.9, "CHF"); // → CHF 9.90
formatPrice(4.5, "EUR"); // → EUR 4.50

// ============================================================

// TODO 1: call formatPrice() with a price of your choice

// TODO 2: define a function called discount
//         it takes two parameters: price and percent
//         it should log the reduced price
//         EXAMPLE: discount(100, 20) → "Price after discount: CHF 80.00"

// TODO 3: call discount() with two different examples
