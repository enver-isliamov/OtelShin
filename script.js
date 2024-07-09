// Находим кнопку Договор и модальное окно
var modalOpenBtn = document.getElementById('modal-open');
var modal = document.getElementById('modal');
var modalCloseBtn = document.getElementById('modal-close');

// Открываем модальное окно при клике на кнопку Договор
modalOpenBtn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при клике на крестик
modalCloseBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике на кнопку "Понятно"
document.querySelector('.modal-content .button').onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
