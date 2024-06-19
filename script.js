// script.js

document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid weight and height values.';
            resultDiv.style.color = 'red';
            return;
        }

        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            resultDiv.style.color = 'orange';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            resultDiv.style.color = 'green';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            resultDiv.style.color = 'orange';
        } else {
            category = 'Obese';
            resultDiv.style.color = 'red';
        }

        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    }
});
