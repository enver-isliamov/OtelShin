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
