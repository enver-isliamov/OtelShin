 // JavaScript для открытия и закрытия модального окна
        var modal = document.getElementById("myModal");
        var btnOpen = document.getElementById("modal-open");
        var btnClose = document.getElementById("modal-close");
        var btnCloseSmall = document.getElementById("button-close");

        // Открытие модального окна при клике на кнопку
        btnOpen.onclick = function() {
            modal.style.display = "block";
        }

        // Закрытие модального окна при клике на кнопку закрытия
        btnClose.onclick = function() {
            modal.style.display = "none";
        }

// Закрытие модального окна при клике на маленькую кнопку "Понятно"
        btnCloseSmall.onclick = function() {
            modal.style.display = "none";
        }

        // Закрытие модального окна при клике вне окна
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

// Функция частые вопросы открываются и смена +/-
function toggleFaq(element) {
    const content = element.nextElementSibling;
    const sign = element.querySelector('span:last-child'); // Получаем элемент с символом +/-

    // Закрываем все остальные ответы
    const allHeaders = document.querySelectorAll('.faq-header');
    
    allHeaders.forEach(header => {
        const headerContent = header.nextElementSibling;

        if (headerContent !== content) {
            headerContent.style.display = 'none';
            header.classList.remove('active'); // Убираем активный класс
            header.querySelector('span:last-child').textContent = '+'; // Возвращаем знак +
        }
        else if (headerContent === content) {
            // Переключаем видимость текущего ответа и добавляем/убираем активный класс
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            header.classList.toggle('active', !isVisible); // Устанавливаем класс в зависимости от состояния
            
            // Меняем знак на + или -
            sign.textContent = isVisible ? '+' : '-';
        }
    });
}
// <-- Функция частые вопросы открываются и смена +/-


//ПОДПИСЬ ///////////////
 const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    // Устанавливаем размеры canvas
    canvas.width = document.getElementById('signature-pad').clientWidth;
    canvas.height = document.getElementById('signature-pad').clientHeight;

    // Начало рисования
    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    // Рисование
    canvas.addEventListener('mousemove', (e) => {
        if (drawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    // Окончание рисования
    canvas.addEventListener('mouseup', () => {
        drawing = false;
        ctx.closePath();
    });

    // Очистка canvas
    document.getElementById('clear').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
//ПОДПИСЬ <-- ///////////////
