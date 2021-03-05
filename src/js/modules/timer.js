/*Данный модуль задает функционал таймеру обратного отсчета
  В качестве параметров принимает следующие переменные:
  1.Селектор таймера
  2.Дедлайн в виде даты*/
const timer = (timerSelector, deadline) => {

    //Данный модуль вычисляет и возвращает оставшееся время
    function getTimeRemaining() {
        /*Находится разность между дедлайном и текущей датой
          Вычисляется оставшееся время в секундах, минутах, часах и днях*/
        const time = Date.parse(deadline) - Date.parse(new Date()),
              seconds = Math.floor((time / 1000) % 60),
              minutes = Math.floor((time / (1000 * 60)) % 60),
              hours = Math.floor((time / (1000 * 60 * 60)) % 24),
              days = Math.floor(time / (1000 * 60 * 60 * 24));
        
        /*Создаем объект с данными об оставшемся времени*/
        let timerResult = {
            totalTime: time,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        };

        return timerResult;
    }

    //Данный метод добавляет к чеслу ноль, если оно меньше 9
    function addZero(num) {
        if(num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    //Данный метод передает данные в HTML элементы
    function setClock() {
        const timer = document.querySelector(timerSelector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(updateClock, 1000);
        
        updateClock();

        /*Данный метод обновляет данные таймера*/
        function updateClock() {
            const t = getTimeRemaining();

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            /*Если разница между дедлайном и текущей датой <=0, 
              то устанавливает значение всех элементов таймера равное нулю
              и останавливает таймер*/ 
            if(t.totalTime <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00'; 

                clearInterval(timerInterval);
            }
        }
    }

    setClock();
};

export default timer;