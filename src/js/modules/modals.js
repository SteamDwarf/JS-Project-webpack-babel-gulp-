const modals = (modalBtnSelector, modalElemSelector, modalCloseClass) => {

        const modalBtn = document.querySelectorAll(modalBtnSelector),
              modalElem = document.querySelector(modalElemSelector),
              allModals = document.querySelectorAll('[data-modal]');

        function modalClose(e) {
            if (e.target === modalElem || e.target.parentNode.className === modalCloseClass) {
                modalElem.style.cssText = 'display: hide';
                document.body.classList.remove('modal-open');
            }
        }
        function modalOpen() {
            modalElem.style.cssText = 'display: block';
            document.body.classList.add('modal-open');
        }

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

        modalElem.addEventListener('click', (e) => {
            modalClose(e);
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