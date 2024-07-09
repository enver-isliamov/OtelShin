<script>
        // Находим кнопку Договор и модальное окно
        var modalOpenBtn = document.getElementById('modal-open');
        var modal = document.getElementById('modal');
        var modalCloseBtn = document.getElementById('modal-close');

        // Открываем модальное окно при клике на кнопку Договор
        modalOpenBtn.onclick = function() {
            modal.classList.add('active');
        }

        // Закрываем модальное окно при клике на крестик
        modalCloseBtn.onclick = function() {
            modal.classList.remove('active');
        }

        // Закрываем модальное окно при клике за его пределами
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('active');
            }
        }
    </script>
