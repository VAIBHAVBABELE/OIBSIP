const calcTemp = () => {
    const inputTemp = document.getElementById('input').value;

    const tempSelected = document.getElementById('conv');
    const valueTemp = conv.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("output").innerHTML = celToFah(inputTemp) + "&#176; F";
    }
    else {
        document.getElementById("output").innerHTML = fahToCel(inputTemp) + "&#176; C";
    }
}
