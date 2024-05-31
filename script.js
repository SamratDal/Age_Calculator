function calculateAge() {
    const birthYearInput = document.getElementById('birthYear');
    const resultDisplay = document.getElementById('result');

    const birthYear = parseInt(birthYearInput.value);
    const currentYear = new Date().getFullYear();
    
    if (birthYear && birthYear > 0 && birthYear < currentYear) {
        const age = currentYear - birthYear;
        resultDisplay.textContent = `You are ${age} years old.`;
    } else {
        resultDisplay.textContent = 'Please enter a valid birth year.';
    }
}
