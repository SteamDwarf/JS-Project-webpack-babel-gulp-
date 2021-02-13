const forms = () => {
    const formsElem = document.querySelectorAll('form'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');
                  
    const message = {
        load: 'Идет отправка данных, ожидайте.',
        error: 'Произошла ошибка, попробуйте еще раз.',
        succesfull: 'Данные успешно отправлены, ожидайте звонка.'
    };

    function hideStatusMessage(element) {
        setTimeout(() => {
            element.remove();
        }, 3000);
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        if(!res.ok) {
            throw new Error(`You response ${url} failed: ${res.status}`);
        }

        return await res.json();
    };

    phoneInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value =  input.value.replace(/\D/, '');
        });
    });

    formsElem.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let messageElem = document.createElement('div');
            messageElem.classList.add('status');
            messageElem.textContent = message.load;
            form.append(messageElem);



            const formData = new FormData(form),
                  object = Object.fromEntries((formData.entries())),
                  json = JSON.stringify(object);

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    messageElem.textContent = message.succesfull;
                }).catch(() => {
                    messageElem.textContent = message.error;
                }).finally(() => {
                    form.reset();
                    hideStatusMessage(messageElem);
                });
        });
    });

};

export default forms;