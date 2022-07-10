/*Данный модуль добавляет функционал модальным окнам
  Принимает в качестве параметров:
  1.Селектор кнопки вызова модального окна
  2.Селектор самого модального окна
  3.Класс елемента закрытия модального окна*/
const modals = (modalBtnSelector, modalElemSelector, modalCloseClass) => {

        const modalBtn = document.querySelectorAll(modalBtnSelector),
              modalElem = document.querySelector(modalElemSelector),
              allModals = document.querySelectorAll('[data-modal]'),
              scrollWidth = calcScrollWidth();

        //Данная функция подсчитывает ширину полосы прокрутки
        function calcScrollWidth() {
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.append(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }

        /*Функция закрытия модального окна, которая срабатывает при нажатии на подложку
          или при нажатии на закрывающий крестик*/
        function modalClose(e) {
            if (e.target === modalElem || e.target.parentNode.className === modalCloseClass) {
                modalElem.style.cssText = 'display: hide';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = '0px';
            }
        }
        /*Функция открытия модального окна, при котором предусматривается сдвиг тела сайта
          из-за скрытия скрола*/
        function modalOpen() {
            modalElem.style.cssText = 'display: block';
            document.body.classList.add('modal-open');
            document.body.style.marginRight = `${scrollWidth}px`;
        }

        /*На каждую кнопку вызова модального окна навешивается событие нажатия ЛКМ*/
        modalBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    allModals.forEach(modal => {
                        modal.style.cssText = 'display: hide';
                    });
                    modalOpen();
                }
            });
        });

        /*На подложку модального окна навешивается событие нажатия ЛКМ,
          при котором модальное окно будет закрываться*/
        modalElem.addEventListener('click', (e) => {
            modalClose(e);
        });

    //Функция которая, спустья определенное время открывает модальное окно
    function openModalByTime(modalElemSelector, time) {
        setTimeout(() => {
            document.querySelector(modalElemSelector).style.cssText = 'display: block';
            document.body.classList.add('modal-open');
        }, time);
    }
    
    openModalByTime('.popup', 60000);
};

export default modals;