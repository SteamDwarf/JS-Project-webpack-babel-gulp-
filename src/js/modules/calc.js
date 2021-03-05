import getData from "./getData";

const calc = (orderData) => {
    const balconsImg = document.querySelectorAll('.balcon_icons_img img'),
          inputWidth = document.querySelector('#width'),
          inputHeight = document.querySelector('#height'),
          windowProfile = document.querySelector('#view_type'),
          lables = document.querySelectorAll('.label-glazing'),
          checkboxes = document.querySelectorAll('.label-glazing input');

    balconsImg.forEach(img => {
        getData('click', img, 'type', orderData);
    });

    checkboxes.forEach((checkbox, i) => {
        getData('change', checkbox, 'glazing', orderData, lables[i]);
    });

    getData('input', inputWidth, 'width', orderData);
    getData('input', inputHeight, 'height', orderData);
    getData('change', windowProfile, 'profile', orderData);

    function refreshCheckBoxes() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            refreshCheckBoxes();
            checkbox.checked = true;
        });
    });


};

export default calc;