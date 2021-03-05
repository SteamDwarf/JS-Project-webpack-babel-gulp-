//Для работы данного модуля необходимо подкоючить:
/*1.Модуль очистки формы
  2.Модуль обновления табов*/
import checkNumInputs from "./checkNumInputs";
import {formClearer, tabsRefresh} from "./Clearing_Refresh";

/*Данный модуль осуществляет функционал работы с формой 
  Принимает объект, в который будет сохраняться информация,
  введенная пользователем*/ 
const forms = (dataClient) => {
    const formsElem = document.querySelectorAll('form');
             
    /*Объект, содержащий 3 вида сообщений, которые будут показываться пользователю
      при загрузке, неудачной или удачной отправке даенных на сервер*/
    const message = {
        load: 'Идет отправка данных, ожидайте.',
        error: 'Произошла ошибка, попробуйте еще раз.',
        succesfull: 'Данные успешно отправлены, ожидайте звонка.'
    };

    //Данный метод, спустя 3 секунды, убирает сообщение об отправке данных
    function hideStatusMessage(element) {
        setTimeout(() => {
            element.remove();
        }, 3000);
    }

    /*Данный метод, конфигурирует запрос на сервер, осуществляет отправку данных 
      на определенный url. При неудаче выкидывает ошибку, при удаче возвращает json объект
    */
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

    /*Для полей ввода телефона у всех форм и исключает возможность
      вводить туда что-либо кроме чисел*/
    
    checkNumInputs('input[name="user_phone"]');

    //Перебираются все формы и на каждую навешивается событие submit
    formsElem.forEach((form) => {
        form.addEventListener('submit', (e) => {
            /*У формы убирается Действие по умолчанию и в низ формы 
              добавляется блок, в котором должно выводиться сообщение 
              о результате отправке данных*/
            e.preventDefault();
            let messageElem = document.createElement('div');
            messageElem.classList.add('status');
            messageElem.textContent = message.load;
            form.append(messageElem);

            /*Из формы получаем введенные данные с помощью FormData
              и помещаем в объект*/
            const formData = new FormData(form),
                  object = Object.fromEntries((formData.entries()));

            /*Данное условие выполняется, если форма относится к модульному калькулятору.
              В данном условии все введеные данные добавляются в уже созданный объект,
              очищается форма и обновляются табы*/ 
            if(form.getAttribute('data-form') === 'calc_end') {
                for (let key in dataClient) {
                    object[key] = dataClient[key];
                }
                console.log(object);
                let selectors = ['#width', '#height', '#view_type', '[name="checkbox-test"]'];
                formClearer(selectors);
                tabsRefresh('.balcon_icons_img', '.big_img img', 'do_image_more');
            }

            /*Преобразуется объект в json объект и отправляется по ссылке
              в базу данных. При успехе или неудаче выводит соответствующее сообщение.
              Форма очищается и убирается сообщение*/
            const json = JSON.stringify(object);

            postData('http://localhost:3000/requests', json)
                .then(() => {
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