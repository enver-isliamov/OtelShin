// Находим кнопку Договор и модальное окно
var modalOpenBtn = document.getElementById('modal-open');
var modal = document.getElementById('modal');
var modalCloseBtn = document.getElementById('modal-close');
var docFrame = document.getElementById('doc-frame');

// Открываем модальное окно при клике на кнопку Договор
modalOpenBtn.onclick = function() {
    modal.style.display = 'block';
    // Загружаем содержимое Google Docs в iframe
    docFrame.src = 'https://docs.google.com/document/d/1r7_mNG0VjecHp2Z4rN7ft0oh7-PQLEpkpsAqtC_P8fw/edit?usp=sharing';
}

// Закрываем модальное окно при клике на крестик
modalCloseBtn.onclick = function() {
    modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне области модального окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
