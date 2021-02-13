const modals = (modalBtnSelector, modalElemSelector, modalCloseClass) => {

        const modalBtn = document.querySelectorAll(modalBtnSelector),
              modalElem = document.querySelector(modalElemSelector);

        function modalClose() {
            modalElem.style.cssText = 'display: hide';
            document.body.classList.remove('modal-open');
        }
        function modalOpen() {
            modalElem.style.cssText = 'display: block';
            document.body.classList.add('modal-open');
        }

        modalBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    modalOpen();
                }
            });
        });

        modalElem.addEventListener('click', (e) => {
            if (e.target === modalElem || e.target.parentNode.className === modalCloseClass) {
                modalClose();
            }
        });

    function openModalByTime(modalElemSelector, time) {
        setTimeout(() => {
            document.querySelector(modalElemSelector).style.cssText = 'display: block';
            document.body.classList.add('modal-open');
        }, time);
    }
    
    //openModalByTime('.popup', 60000);
};

export default modals;