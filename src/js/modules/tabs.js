/*Данный модуль релизует работу с табами. 
  В качестве параметров принимает следующие переменные:
  1.Селектор блока с табами
  2.Селектор элементов-табов
  3.Селектор элементов-контента
  4.Класс активности для элементов-табов*/
const tabs = (wrapperSelector, headerSelector, contentSelector, activeClass) => {
    const tabWrapper = document.querySelector(wrapperSelector),
          tabHeader = document.querySelectorAll(headerSelector),
          tabContent = document.querySelectorAll(contentSelector);
        
    //Данный метод обновляет табы, скрывает контент и убирая класс активности таба
    function hideContent() {
        tabContent.forEach(item => {
            item.style.cssText = 'display: none';
        });
        tabHeader.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    //Данный метод показывает определенный контент и добавляет класс активности табу
    function showContent(i) {
        hideContent();
        tabContent[i].style.cssText = 'display: block';
        tabHeader[i].classList.add(activeClass);
    }

    //Навешивание на блока с табами обработчика событий
    tabWrapper.addEventListener('click', (e) => {
        /*Если нажатие было произведено на элемент-таб, то начинают перебираться
          элементы.*/
        if (e.target.classList.contains(headerSelector.replace(/\./,'')) ||
            e.target.parentNode.classList.contains(headerSelector.replace(/\./,''))) {
            tabHeader.forEach((tab, i) => {
                /*Если таб соответствует тому, на который было осуществленно нажатие
                  то выполняется метод показа контента таба*/
                if (e.target === tab || e.target.parentNode === tab) {
                showContent(i);
                }
            });
        }
    });
};

export default tabs;