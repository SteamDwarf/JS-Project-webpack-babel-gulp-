//Данный модулю настраивает показ фотографии при нажатии на нее
const imagesShow = () => {
    const imgModal = document.querySelector('.popup_image'),
          imageBlock = document.querySelector('.works'),
          bigImage = imgModal.querySelector('img');

    //Навешивается на блок с фотографиями событие нажатия ЛКМ
    imageBlock.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        /*Если нажатие произвели по картинке, то показывается модальное окно,
          картинке данного модального окна назначаем путь нажатой картинки,
          исключается возможность листать страницу при открытом модальном окне*/
        if(target && target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.classList.add('modal-open');
        }

        /*Если при открытом модальном окне с картинкой, произвели нажатие по
          подложке модальной окно скрывается.*/
        if(target && target.classList.contains('popup_image')) {
            imgModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
};

export default imagesShow;