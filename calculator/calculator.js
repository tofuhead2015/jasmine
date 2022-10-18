window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 1000
  document.getElementById("loan-years").value = 5
  document.getElementById("loan-rate").value = 10
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(values))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const amount = values.amount
  const payments = values.years * 12
  const rate = values.rate / 12 / 100

  const monthly_payment = (amount * rate) / (1 - (1 + rate)**(0-payments))
  return monthly_payment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthly_UI = document.getElementById('monthly-payment')
  monthly_UI.innerText = monthly
}
