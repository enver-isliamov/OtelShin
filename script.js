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
///Анимация кнопок //пульсация btn
const rippleBtn = document.getElementById("ripple");
let ripples = document.createElement("span");
let cleartimeout;

// если хотите получить этот эффект при нажатии, просто добавьте щелчок вместо события наведения курсора мыши
rippleBtn.addEventListener("mouseover", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  cleartimeout = setTimeout(() => {
    ripples.remove();
  }, 1000);
});

rippleBtn.addEventListener("mouseout", function () {
  ripples.remove(cleartimeout);
});
