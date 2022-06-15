// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";



let jsMd7_i1 = document.querySelector('.js-md-7__i-1');
let jsMd7_count1 = document.querySelector('.js-md-7__count-1');
if (jsMd7_i1 && jsMd7_count1) {
    jsMd7_i1.addEventListener('input', function () {
        jsMd7_count1.textContent = this.value;
    });
}


if (document.querySelector('.action-buttons')) {
    const actionButtons = document.querySelectorAll('.action-buttons');
    actionButtons.forEach(elem => {
        const actionButtonsResult = elem.querySelector('.action-buttons__result');
        const actionButtonsName = elem.getAttribute('data-action-buttons');
        if (elem.getAttribute('data-action-buttons-type') == 'container') {
            elem.querySelectorAll('.action-buttons__btn').forEach(el => {
                if (el.getAttribute('data-action-buttons') == 'default') {
                    el.classList.add('active-btn-bg');
                    actionButtonsResult.style[actionButtonsName] = el.textContent;
                }
                el.addEventListener('click', () => {
                    actionButtonsResult.style[actionButtonsName] = el.textContent;
                    for (let item of elem.querySelectorAll('.action-buttons__btn')) {
                        item.classList.remove('active-btn-bg');
                    }
                    el.classList.add('active-btn-bg');
                })
            });
        } else if (elem.getAttribute('data-action-buttons-type') == 'item') {
            elem.querySelectorAll('.action-buttons__btn').forEach(el => {
                if (el.getAttribute('data-action-buttons') == 'default') {
                    el.classList.add('active-btn-bg');
                    actionButtonsResult.querySelectorAll('div')[0].style[actionButtonsName] = el.textContent;
                }
                el.addEventListener('click', () => {
                    let actionButtonsResultItem = actionButtonsResult.querySelectorAll('div');
                    actionButtonsResultItem[0].style[actionButtonsName] = el.textContent;
                    for (let item of elem.querySelectorAll('.action-buttons__btn')) {
                        item.classList.remove('active-btn-bg');
                    }
                    el.classList.add('active-btn-bg');
                })
            });
        }
    });
}



if (document.querySelector('#map-wrapper1')) {
    function init() {
        let map = new ymaps.Map('map-wrapper1', {
            center: [48.5837991191151, 44.43117686930432],
            zoom: 18,
        });
    }
    ymaps.ready(init);
}
if (document.querySelector('#map-wrapper2')) {
    function init() {
        let map = new ymaps.Map('map-wrapper2', {
            center: [48.5837991191151, 44.43117686930432],
            zoom: 18,
        });
        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    }
    ymaps.ready(init);
}
if (document.querySelector('#map-wrapper3')) {
    function init() {
        let map = new ymaps.Map('map-wrapper3', {
            center: [48.5837991191151, 44.43117686930432],
            zoom: 18,
        });
    }
    ymaps.ready(init);
}
if (document.querySelector('#map-wrapper4')) {
    let center = [48.5837991191151, 44.43117686930432];

    function init() {
        let map = new ymaps.Map('map-wrapper4', {
            center: center,
            zoom: 18,
        });

        let placemark = new ymaps.Placemark([48.58396950791298, 44.43111319240889], {}, {

        });
        map.geoObjects.add(placemark);
    }
    ymaps.ready(init);
}
if (document.querySelector('#map-wrapper5')) {
    let center = [48.5837991191151, 44.43117686930432];

    function init() {
        let map = new ymaps.Map('map-wrapper5', {
            center: center,
            zoom: 18,
        });

        let placemark1 = new ymaps.Placemark([48.58396950791298, 44.43111319240889], {}, {
            iconLayout: 'default#image', // указываем что будем использовать свою картинку
            iconImageHref: 'img/other/maps/marker.png', // путь к картинке
            iconImageSize: [30, 30], // размер
            iconImageOffset: [-17, -27], // отступ от центра (нужно подобрать)
        });
        let placemark2 = new ymaps.Placemark([48.58457277937288, 44.431488701670965], {}, {
            iconLayout: 'default#image', // указываем что будем использовать свою картинку
            iconImageHref: 'img/other/maps/marker.png', // путь к картинке
            iconImageSize: [30, 30], // размер
            iconImageOffset: [-17, -27], // отступ от центра (нужно подобрать)
        });
        map.geoObjects.add(placemark1);
        map.geoObjects.add(placemark2);
    }
    ymaps.ready(init);
}
if (document.querySelector('#map-wrapper6')) {
    let center = [48.5837991191151, 44.43117686930432];

    function init() {
        let map = new ymaps.Map('map-wrapper6', {
            center: center,
            zoom: 18,
        });

        let placemark1 = new ymaps.Placemark([48.58396950791298, 44.43111319240889], {
            balloonContentHeader: 'Хедер балуна',
            balloonContentBody: 'Боди балуна',
            balloonContentFooter: 'футер балуна',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/other/maps/marker.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-17, -27],
        });
        map.geoObjects.add(placemark1);
    }
    ymaps.ready(init);
}
if (document.querySelector('#map-wrapper7')) {
    let center = [48.5837991191151, 44.43117686930432];

    function init() {
        let map = new ymaps.Map('map-wrapper7', {
            center: center,
            zoom: 18,
        });

        let placemark1 = new ymaps.Placemark([48.58396950791298, 44.43111319240889], {
            balloonContent: `
            <div class="balloon">
                <div class="balloon__addres">г.Волгоград</div>
                <div class="balloon__contacts">
                    <a href="tel:89880225599">89880225599</a>
                </div>
            </div>
            `,
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/other/maps/marker.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-17, -27],
        });
        map.geoObjects.add(placemark1);

        placemark1.balloon.open(); // балун открыт по умолчанию
    }
    ymaps.ready(init);
}