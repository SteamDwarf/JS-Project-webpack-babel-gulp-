const checkNumInputs = (inputsSelector) => {
    const inputs = document.querySelectorAll(inputsSelector);

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value =  input.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;