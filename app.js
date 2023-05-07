const input = document.querySelector('#textarea');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
    if (input.value.trim() == '') {
        output.innerHTML = '<span class="counter" id="output">Count of words:</span>';
    } else {
        output.innerHTML = `<span class="counter" id="output">Count of words:</span> ${input.value.trim().split(' ').length}`;
    }
});