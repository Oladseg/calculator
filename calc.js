let inputs = [];
let display_values = "";
const input = (val) => {
    inputs.push(val);
    display_values = inputs.join("");
    document.getElementById("display").value = display_values;
};
function clearResult() {
    document.getElementById('result').value = '';
}
const calculate = () => {
    display_values = display_values.replace(/%/g, "/100*");
    const result = eval(display_values);
    document.getElementById("display").value = result;
    inputs = [result];
};

// const part = [];
// const whole = [];
// const percentage = eval(`${part}/100*${whole}`);
// console.log(percentage);