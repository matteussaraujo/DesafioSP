function invertString() {
    const inputString = document.getElementById('inputString').value;
    const resultDiv = document.getElementById('result');

  
    function reverse(str) {
        let inverted = '';
        for (let i = str.length - 1; i >= 0; i--) {
            inverted += str[i];
        }
        return inverted;
    }

  
    resultDiv.textContent = reverse(inputString);
}
