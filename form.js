let input = document.getElementById('input');
input.addEventListener('keyup', outputText);

function outputText() {
    let output = document.getElementById('output');
    output.innerHTML = input.value;
}