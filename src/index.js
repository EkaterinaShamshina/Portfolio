import 'normalize.css'
import './styles/main.scss';
import './styles/tooltip.scss';
import './styles/customselect.scss';
import './styles/modal.scss';

import customSelect from 'custom-select';
import { fn } from 'jquery';

customSelect('.mySelect');

//modal window
document.addEventListener('DOMContentLoaded', function() {
    // это то модальное окно, с которым и будем работать
    const modal = document.querySelector('#myModal');
    const buttons = document.querySelectorAll('.js-open-modal')

    // назначаем обработчик события для клика по кнопке открытия окна
    buttons.forEach(item => {
        item.addEventListener('click', openModal);
    })

    /*
     * Обработчик события клика по кнопке открытия модального окна
     */
    function openModal() {
        modal.classList.add('modal-open');
        // обработчики событий, которые работают, когда окно открыто
        attachModalEvents();
    }

    /*
     * Функция назначает обработчики событий к элементам модального окна при открытии
     */
    function attachModalEvents() {
        // закрывать модальное окно при нажатии на крестик
        modal.querySelector('.close').addEventListener('click', closeModal);
        // закрывать модальное окно при нажатии клавиши Escape
        document.addEventListener('keydown', handleEscape);
        // закрывать модальное окно при клике вне контента модального окна
        modal.addEventListener('click', handleOutside);
    }

    /*
     * Обработчик события клика по кнопке закрытия модального окна
     */
    function closeModal() {
        modal.classList.remove('modal-open');
        // окно закрыто, эти обработчики событий больше не нужны
        detachModalEvents();
    }

    /*
     * Функция удаляет обработчики событий к элементам модального окна при закрытии
     */
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }

    /*
     * Функция закрывает модальное окно при нажатии клавиши Escape
     */
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    /*
     * Функция закрывает модальное окно при клике вне контента модального окна
     */
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

$('.project-discussion_btn').on('click', function(e){
    $('body').toggleClass('lock');
});

$('.close, .form__button,').on('click', function(e){
    $('body').removeClass('lock');
});

//Плавный скролл
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset =  $('header').outerHeight();
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

//Бургер-меню
    $('.menu__icon').on('click', function(e){
        $('.menu__icon, .navigation__tab').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.navigation__tab a').on('click', function(e){
        $('.menu__icon, .navigation__tab').removeClass('active');
        $('body').removeClass('lock');
    });