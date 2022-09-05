// carga imagenes a partir de Objeto con datos
const loadImages = (nodo,ruta, datos) => {

  const imagenes = document.getElementById(nodo);

  datos.map((item) => {


    const url_imagen = ruta + "img/" + (!item.imagen ? "desconocido.jpg" : item.imagen);

    var div = document.createElement("div");
    div.classList.add("ficha-jugador")

    var img = document.createElement("img");
    img.src = url_imagen;
    img.alt = "";
    img.loading = "lazy";

    div.appendChild(img)

    var _nombre = document.createElement("p");
    _nombre.innerText = `#${item.dorsal} - ${item.nombre} ${item.apellidos}`
    div.appendChild(_nombre)

    var _apellidos = document.createElement("p");
    _apellidos.innerText = item.posicion
    div.appendChild(_apellidos)

    imagenes.appendChild(div)

  });
}

cargaImagenes();
