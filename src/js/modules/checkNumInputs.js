//Данный модуль служит для предупреждения ввода в инпуты не чисел
//Принимает в качестве параметра селектор инпута
const checkNumInputs = (inputsSelector) => {
    const inputs = document.querySelectorAll(inputsSelector);

    //При введение в инпут не числа, символ заменяется на пустую строку
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value =  input.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;