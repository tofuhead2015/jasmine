
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 10})).toBe('13.22')  
});


it("should return a result with 2 decimal places", function() {
  expect(parseFloat(calculateMonthlyPayment({amount: 1000, years: 10, rate: 10})).toFixed(2)).toBe(calculateMonthlyPayment({amount: 1000, years: 10, rate: 10}))
});

/// etc
