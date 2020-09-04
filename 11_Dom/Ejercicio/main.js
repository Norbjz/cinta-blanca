let nombre = document.getElementById("nombre");
let direccion = document.getElementById("direccion");
let telefono = document.getElementById("telefono");

const pizza = () => {
    card1.innerHTML = nombre.value;
    card2.innerHTML = direccion.value;
    card3.innerHTML = telefono.value;

    if (document.getElementById("pinia").checked) {
        card4.innerHTML = "Con piña";
    } else {
        card4.innerHTML = "Sin piña";
    }
};

boton.addEventListener("click", pizza);