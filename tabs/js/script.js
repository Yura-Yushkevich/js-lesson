'use strict';

import calculator from './modules/calculator';
import cards from './modules/cards';
import fetchForm from './modules/fetchForm';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded',()=>{
    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 50000);

    calculator();
    cards();
    fetchForm('form',modalTimerId);
    modal('[data-modal]','.modal',modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        currentCounter:'#current',
        totalCounter:'#total',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontainer .tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-01-01');
});