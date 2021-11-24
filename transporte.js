//Contenedor de las tarjetas
const indexDatos = document.querySelector('.contenedor_tarjetas_distritos');
//Ubicacion del Json
const url = "datos.json"



    fetch(url)
    .then(res => res.json())
    .then(data =>     
    { 
          console.log(data);
         // data.forEach(data => console.log(data.nombre));
          data.forEach(data => createTarjeta(data) );
    
    })
    .catch(err => console.log(err));


function createTarjeta(data){

    //Div Carta con datos
    const card = document.createElement("div");
    card.classList.add("card");

    //carta datos
    var insertacionDatos = document.createTextNode("Hola que tal salchicha");

    //campos nombre - datos

    const nombreContenedor = document.createElement("p");
    nombreContenedor.classList.add("nombreContenedor");     /*--[ ■ Clase ]--*/
    nombreContenedor.innerHTML= data.nombre;
    
    //Campos SVG - DATOS
    
    const svgContenedor = document.createElement("div");
    svgContenedor.classList.add("svgContenedor");           /*--[ ■ Clase ]--*/

    const svgImagen = document.createElement("img");
    svgImagen.classList.add("svgContenedor_img")            /*--[ ■ Clase ]--*/
    svgImagen.src = data.direccion;

    svgContenedor.appendChild(svgImagen);
    
    //Insercion a Tarjeta
    card.appendChild(svgContenedor);
    card.appendChild(nombreContenedor);

    //Impresion
    card.appendChild(insertacionDatos);

    indexDatos.appendChild(card);
    


}