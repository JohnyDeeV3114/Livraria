const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
function mostrarForm(){
    form.style.left = "50%"
    form.style.top ="30%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function esconderForm(){
    form.style.left = "50%"
    form.style.top ="99%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "hidden"

}