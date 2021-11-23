const indexDatos = document.querySelector('.contenedor');

    fetch("datos.json")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


function createTarjeta(data){
    const card = document.createElement("div");
    card.classList.add("card");

    const contenedorsvg = document.createElement("div");
    contenedorsvg.classList.add("card_contenedorSvg")

    const svg = document.createElement("svg");

}