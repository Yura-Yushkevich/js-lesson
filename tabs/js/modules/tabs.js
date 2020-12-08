'use strict';

function tabs (tabsSelector, tabsContentSelector,tabsParantSelector, activeClass){


    //Tabs ////////////////////////

    const   tabContents = document.querySelectorAll(tabsContentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsParrent = document.querySelector(tabsParantSelector);

    function hideTabContent() {
    tabContents.forEach((item)=>{
        item.classList.add('hide');
        item.classList.remove('show','fade');
    });

    tabs.forEach((item)=>{
        item.classList.remove(activeClass);
    });
    }

    function showTabContent(i = 0) {
    tabContents[i].classList.add('show','fade');
    tabContents[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
    }



    hideTabContent();
    showTabContent();

    tabsParrent.addEventListener('click',(e)=>{
    const target = e.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((item,i)=>{
            if(target == item){
                hideTabContent();
                showTabContent(i); 
            }
        });
    }
    });

}

export default tabs;