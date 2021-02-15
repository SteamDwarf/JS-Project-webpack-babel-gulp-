const calc = (data) => {
    const balconsImg = document.querySelectorAll('.balcon_icons_img'),
          firstCalcModal = document.querySelector('.popup_calc'),
          secondCalcModal = document.querySelector('.popup_calc_profile'),
          firstNextButton = firstCalcModal.querySelector('.popup_calc_button'),
          secondNextButton = secondCalcModal.querySelector('.popup_calc_profile_button'),
          inputs = firstCalcModal.querySelectorAll('input');
    

    function getBalconType(balcon) {
        const img = balcon.querySelector('img');
        data.balconType = img.getAttribute('alt');
    }

    function calcFormClear() {

    }

    balconsImg.forEach((balcon, i) => {
        balcon.addEventListener('click', () => {
            getBalconType(balcon);
        });
    });

    firstNextButton.addEventListener('click', (e) => {
        const widthInput = firstCalcModal.querySelector('#width'),
              heightInput = firstCalcModal.querySelector('#height');

        data.width = widthInput.value;
        data.height = heightInput.value;
        
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
    });

};

export default calc;