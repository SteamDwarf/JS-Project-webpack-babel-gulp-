import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    modals('.popup_engineer_btn', '.popup_engineer', 'popup_close');
    modals('.phone_link', '.popup', 'popup_close');
    modals('.glazing_price_btn', '.popup_calc', 'popup_calc_close');
    tabs();
    forms();
    calc();
});
