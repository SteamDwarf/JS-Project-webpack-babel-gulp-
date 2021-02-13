const calc = () => {
    const balconsImg = document.querySelectorAll('.balcon_icons_img'),
          bigBalconImg = document.querySelectorAll('.big_img img'),
          firstCalcModal = document.querySelector('.popup_calc'),
          secondCalcModal = document.querySelector('.popup_calc_profile'),
          thirdCalcModal = document.querySelector('.popup_calc_end'),
          firstNextButton = firstCalcModal.querySelector('.popup_calc_button'),
          secondNextButton = secondCalcModal.querySelector('.popup_calc_profile_button');
          //firstNextButton = firstCalcModal.querySelector('.popup_calc_button');

    const data = {};

    function hideBigImg() {
        bigBalconImg.forEach(img => {
            img.style.cssText = 'display: none';
        });
        balconsImg.forEach(img => {
            img.classList.remove('do_image_more');
        })
    }

    function showBigImg(i) {
        hideBigImg();
        bigBalconImg[i].style.cssText = 'display: block';
        balconsImg[i].classList.add('do_image_more');
    }

    function getBalconType(balcon) {
        const img = balcon.querySelector('img');
        data.balconType = img.getAttribute('alt');
    }

    function showNextModal(curentModal, nextModal) {
        curentModal.style.cssText = 'display: hide';
        nextModal.style.cssText = 'display: block';
    }

    balconsImg.forEach((balcon, i) => {
        balcon.addEventListener('click', () => {
            showBigImg(i);
            getBalconType(balcon);
            console.log(data);
        });
    });

    firstNextButton.addEventListener('click', () => {
        const widthInput = firstCalcModal.querySelector('#width'),
              heightInput = firstCalcModal.querySelector('#height');

        data.width = widthInput.value;
        data.height = heightInput.value;
        
        showNextModal(firstCalcModal, secondCalcModal);
        hideBigImg();
    });

    secondNextButton.addEventListener('click', () => {
        const selectSpan = secondCalcModal.querySelector('#view_type'),
              checkboxLabel = secondCalcModal.querySelectorAll('label');
        
        data.profile = selectSpan.value;

        checkboxLabel.forEach(label => {
            const checkboxSpan = label.querySelector('.checkbox-custom'),
                  checkboxInput = label.querySelector('input');

            if (checkboxInput.checked) {
                data.typeGlazing = checkboxSpan.getAttribute('id');
            }
        });

        showNextModal(secondCalcModal, thirdCalcModal);
        console.log(data);
    });
};

export default calc;