import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from './modules/calc';
import checkNumInputs from './modules/checkNumInputs';
import timer from './modules/timer';
import imagesShow from './modules/images';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let data = {};
    let deadline = '2023-08-15';

    modals('.popup_engineer_btn', '.popup_engineer', 'popup_close');
    modals('.phone_link', '.popup', 'popup_close');
    modals('.glazing_price_btn', '.popup_calc', 'popup_calc_close');
    modals('.popup_calc_button', '.popup_calc_profile', 'popup_calc_profile_close');
    modals('.popup_calc_profile_button', '.popup_calc_end', 'popup_calc_end_close');

    tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

    checkNumInputs('input[name="user_phone"]');
    checkNumInputs('.popup_calc input');
    
    calc(data);
    forms(data);

    timer('#timer', deadline);
    imagesShow();
});
