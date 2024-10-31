let resultadoDiv = document.getElementById('resultado');
for (let num1 = 1; num1 <= 10; num1++) {
    
    for (let num2 = 1; num2 <=10; num2++) {
        let res = num1 * num2;
        resultadoDiv.innerHTML += `${num1} X ${num2} = ${num1 * num2}<br>`;
    }
    resultadoDiv.innerHTML += '<br>';
}
