/*Данный модуль позволяет получить и сохранить данные из различных
  элементов страницы при взаимодействии с ними
  Принимает в качестве параметров:
  1.Действие при котором с элемента будет браться данные
  2.Сам элемент с которого будут браться данные
  3.Ключ объекта под которым сохранятся данные 
  4.Объект в который сохранятся все данные
  5.Опциональный параметр, дополнительный селектор*/
const getData = (action, target, field, orderData, optionalVar) => {
    switch(target.nodeName) {
        case 'IMG':
            //У элемента img в качестве данных берется значение атрибута alt
            target.addEventListener(action, () => {
                orderData[field] = target.getAttribute('alt');
            });
            break;

        case 'INPUT':
            //Если переданный элемент input, то проверяется его тип
            if(target.getAttribute('type') === 'checkbox') {
                //Если элемент checkbox, то прверяется передан ли параметр optionalVar 
                if(optionalVar) {
                    /*Если optionalVar передан, то при определенном действии
                      в объект данных юудет передаваться значение id span*/
                    target.addEventListener(action, () => {
                        const span = optionalVar.querySelector('span');
                        orderData[field] = span.getAttribute('id');
                   });
                } else {
                    /*Если optionalVar не переда, то в качестве данных
                      в объект передастся значение атрибута name самого checkbox*/
                    target.addEventListener(action, () => {
                        orderData[field] = target.getAttribute('name');
                   }); 
                }
            //Если input не checkbox, то в качестве данных передастся value данного input
            } else {
                target.addEventListener(action, () => {
                    orderData[field] = target.value;
                });
            }   
            break;

        case 'SELECT':
            //Если элемент select, то в объект передастся value данного элемента
            target.addEventListener(action, () => {
                orderData[field] = target.value;
            }); 
            break;
    }
};

export default getData;