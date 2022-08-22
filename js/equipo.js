// carga imagenes a partir de Objeto con datos
const loadImages = (ruta, datos) => {

  const imagenes = document.getElementById("imagenes");

  datos.map((item) => {

    const url_imagen = ruta + "img/" + item.imagen;

    var div = document.createElement("div");
    div.classList.add("item")

    var img = document.createElement("img");
    img.src = url_imagen;
    img.alt = "";
    img.loading = "lazy";

    div.appendChild(img)

    var h4_nombre = document.createElement("h4");
    h4_nombre.innerText =  `#${item.dorsal} - ${item.nombre} ${item.apellidos}`
    div.appendChild(h4_nombre)

    var h4_apellidos = document.createElement("h4");
    h4_apellidos.innerText = item.posicion
    div.appendChild(h4_apellidos)

    imagenes.appendChild(div)

  });
}

// carga datos e imagenes
const datos = fetch("/equipo/datos.json")
  .then((response) => response.json())
  .then((data) => {
    const ruta = data.CONFIG[0].ruta;
    const datosCategoria = data.SR_FEMENINO
    loadImages(ruta, datosCategoria)
  });


