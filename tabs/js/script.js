'use strict';

window.addEventListener('DOMContentLoaded',()=>{

const   tabContents = document.querySelectorAll('.tabcontainer .tabcontent'),
        tabs = document.querySelectorAll('.tabheader__items .tabheader__item'),
        tabsParrent = document.querySelector('.tabheader__items');

// tabs.forEach((item, i)=>{
//     item.addEventListener('click', e=>{
//         deleteActiveElement(tabContents);    
//         deleteActiveElement(tabs);    
//         tabContents[i].classList.add('active');
//         item.classList.add('tabheader__item_active');
//     });
// });

function hideTabContent() {
    tabContents.forEach((item)=>{
        item.classList.add('hide');
        item.classList.remove('show','fade');
    });

    tabs.forEach((item)=>{
        item.classList.remove('tabheader__item_active');
    });
}

function showTabContent(i = 0) {
    tabContents[i].classList.add('show','fade');
    tabContents[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}



// function deleteActiveElement(arr){
//     arr.forEach((item, i )=>{
//         if(item.classList.contains('active')){
//             item.classList.remove('active');
//         }else if(item.classList.contains('tabheader__item_active')){
//             item.classList.remove('tabheader__item_active');         
//         }
//     });
// }

hideTabContent();
showTabContent();

tabsParrent.addEventListener('click',(e)=>{
    const target = e.target;
    if (target && target.matches('div.tabheader__item')) {
        tabs.forEach((item,i)=>{
            if(target == item){
                hideTabContent();
                showTabContent(i); 
            }
        });
    }
});

});

