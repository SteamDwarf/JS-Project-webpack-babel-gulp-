//Данный модуль служит для обновления данных в табах и формах

/*Данный подмодуль служит для обновления табов
  Принимает в качестве параметров:
  1.Селектор самих табов
  2.Селектор контент-элементов 
  3.Класс активности для табов*/
const tabsRefresh = (tabsSelector, contentSelector, activeClass) => {
    const tabs = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentSelector);
    
//У каждого таба убирается класс активности
    tabs.forEach(tab => {
        tab.classList.remove(activeClass);
    });

/*Перебираются все контентные элементы табов, 
  и у них устанавливается display: none*/
    content.forEach(item => {
        item.style.cssText = 'display: none';
    });

/*Позволяет задать первому табу активный класс
  и первому контентному элементу display: block*/

/*     tabs[0].classList.add(activeClass);
    content[0].style.cssText = 'display: block'; */
};


/*Данный подмодуль очищается все элементы формы от введенных данных
  Принимает в качестве параметра массив селекторов элементов формы*/
const formClearer = (selectors) => {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            switch(element.nodeName) {
                case 'INPUT':
                    if(element.getAttribute('type') === 'checkbox') {
                        //У каждого чекбокса убирается галочка
                        element.checked = false;
                    } else {
                        //У каждого инпута стирается введенное значение
                        element.value = '';
                    }
                    break;
    
                case 'SELECT':
                    //У каждого элемента select активным становится первый элемент списка
                    element.selectedIndex = 0;
                    break;     
            }
        });  
    });
};

//Экспортируются подмодули поотдельности, для удобства в использовании
export {formClearer};
export {tabsRefresh};