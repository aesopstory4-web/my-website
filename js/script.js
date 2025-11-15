// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const header = document.getElementById('header');
    const menuLinks = document.querySelectorAll('.menu-list a');

    // 햄버거 버튼 클릭 시 메뉴 토글
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        header.classList.toggle('menu-open');
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                header.classList.remove('menu-open');
            }
        });
    });
});