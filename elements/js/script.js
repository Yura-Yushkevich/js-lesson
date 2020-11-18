'use strict';

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');

        box.style.backgroundColor = 'blue';
        box.style.width = '400px';

        btns[1].style.borderRadius = '100%';
        circles[2].style.backgroundColor = 'red';

        const green = 'green';

        box.style.cssText = `background-color:${green}; width:100%`;

        // for(let i=0; circles.length;i++){
        //     circles[i].style.backgroundColor ='green';
        // }

        hearts.forEach((item) =>{
            item.style.backgroundColor = 'green';
        });

        const div = document.createElement('div');

        // const text = document.createTextNode('Тут был я');

        div.classList.add('black');
        
        // document.body.append(div);

        wrapper.append(div);
        // wrapper.prepend(div);

        // hearts[0].after(div);

        // circles[1].remove();

        // hearts[0].replaceWith(circles[0]);


        div.innerHTML = '<h1>Hello World!!!</h1>';


    //   div.textContent = '<h1>Hello</h1>'; 
    
    div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');
