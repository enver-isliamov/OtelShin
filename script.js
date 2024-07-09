// Находим кнопку Договор и модальное окно
var modalOpenBtn = document.getElementById('modal-open');
var modal = document.getElementById('modal');
var modalCloseBtn = document.getElementById('modal-close');
var modalUnderstandBtn = document.getElementById('modal-understand');
var dogovorContent = document.getElementById('dogovor-content');

// Открываем модальное окно при клике на кнопку Договор
modalOpenBtn.onclick = function() {
    // Выполняем AJAX запрос
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://enver-isliamov.github.io/Kopchek/Dogovor.html');
    xhr.onload = function() {
        if (xhr.status === 200) {
            dogovorContent.innerHTML = xhr.responseText; // Вставляем полученный HTML в модальное окно
            modal.style.display = "block"; // Показываем модальное окно
        } else {
            alert('Произошла ошибка при загрузке договора');
        }
    };
    xhr.send();
}

// Закрываем модальное окно при клике на крестик
modalCloseBtn.onclick = closeModal;

// Закрываем модальное окно при клике на кнопку "Понятно"
modalUnderstandBtn.onclick = closeModal;

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
    dogovorContent.innerHTML = ''; // Очищаем содержимое при закрытии окна
}
