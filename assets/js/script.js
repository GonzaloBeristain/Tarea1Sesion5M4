$(document).ready(function () {
    const code = $("#code");
    const boton = $("#bt");

    code.on({
        keyup: () => {
            if (code.val()) {
                code.css("background-color", "cyan");
                code.css("color", "blue");
            }
            else {
                code.css("background-color", "white");
                code.css("color", "black");
            }
        },

        focusout: () => {
            if (code.val()) {
                code.css("background-color", "lime");
                code.css("color", "green");
            }
            else {
                code.css("background-color", "white");
                code.css("color", "black");
            }
        }
    })

    boton.on({
        click: () => {
            boton.text("¿Estás seguro?");
            boton.addClass("bg-warning");
        },

        dblclick: () => {
            boton.text("OK");
            boton.removeClass("bg-warning");
            boton.addClass("bg-primary");
        },

        mouseleave: () => {
            if (boton.text() === "OK") {
                boton.text('COMPRADO')
                boton.removeClass('bg-primary')
                boton.addClass('bg-success')
            }
        }
    })
});