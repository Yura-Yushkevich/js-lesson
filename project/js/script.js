/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Бла-бла"
        ]
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const sortArr = (arr) => {
        arr.sort();
    };

    const adv = document.querySelectorAll('.promo__adv img');

    deleteAdv(adv);



    document.querySelector('.promo__genre').textContent = 'драма';

    document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) center center/cover no-repeat';

    const promoItemsWrp = document.querySelector('.promo__interactive-list'),
        formAddWrp = document.querySelector('form.add'),
        inputAddFilm = formAddWrp.querySelector('.adding__input'),
        inputFavFilm = formAddWrp.querySelector('input[type=checkbox]');


    showListFilm(movieDB.movies, promoItemsWrp);



    formAddWrp.addEventListener('submit', (e) => {
        e.preventDefault();

        if (inputAddFilm.value) {
            let inputValueText = inputAddFilm.value.toUpperCase();
            let favFilmChecked = inputFavFilm.checked;

            if (inputValueText.length > 21) {
                inputValueText = `${inputValueText.slice(0,21)}...`;
            }

            movieDB.movies.push(inputValueText);

            if (favFilmChecked) {
                console.log('Добавляем любимый фильм');
            }

            showListFilm(movieDB.movies, promoItemsWrp);
            e.target.reset();
        }
    });


    function showListFilm(films, parent) {
        sortArr(films);
        parent.innerHTML = "";


        films.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
            ${i+1}. ${item}
            <div class="delete"></div>
            </li>
            `;

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
                 movieDB.movies.splice(i,1);
                showListFilm(films, parent);
            });
        });

    });



    }


});