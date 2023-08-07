const propertyValueSlider = document.getElementById('propertyValue');
  const propertyValueLabel = document.getElementById('propertyValueLabel');
  propertyValueSlider.addEventListener('input', function() {
    propertyValueLabel.textContent = `$${propertyValueSlider.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  });

  const loanToValueSlider = document.getElementById('loanToValue');
  const loanToValueLabel = document.getElementById('loanToValueLabel');
  loanToValueSlider.addEventListener('input', function() {
    loanToValueLabel.textContent = `${loanToValueSlider.value}%`;
  });

  document.getElementById('calculateBtn').addEventListener('click', function() {
    const propertyValue = parseFloat(propertyValueSlider.value);
    const loanToValue = parseFloat(loanToValueSlider.value);
    
    if (isNaN(propertyValue) || isNaN(loanToValue)) {
      document.getElementById('loanAmountResult').textContent = "Please enter valid numbers.";
      return;
    }
    
    const loanAmount = propertyValue * (loanToValue / 100);
    document.getElementById('loanAmountResult').textContent = `Loan Amount: $${loanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  });