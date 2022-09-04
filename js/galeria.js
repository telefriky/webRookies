// carga imagenes a partir de Objeto con datos
const loadImages = (nodo, ruta, datos) => {

  const imagenes = document.getElementById(nodo);

  for (i = 0; i < datos.length; i++) {
    imagenes.appendChild(nuevaImagen(ruta, datos[i]))
  }

}

const nuevaImagen = (ruta, item) => {
  const url_thumbnail = ruta + 'thumbs/' + item.thumbnail;
  const url_imagen = ruta + 'images/' + item.imagen;

  // console.log(url_imagen)
  var img = document.createElement('img');
  img.src = url_imagen;
  // img.src = url_thumbnail;
  img.alt = ''
  img.classList.add('img-responsive')
  img.loading = 'lazy';

  var anchor = document.createElement('a');
  anchor.removeAttribute('href');
  anchor.setAttribute('data-lg-size', "1600-1067");
  anchor.setAttribute('data-src',url_imagen)
  // anchor.setAttribute('data-sub-html',"<h4>texto</h4><p> parrafo</p>")
  anchor.classList.add ("gallery-item")
  anchor.classList.add ("jg-entry")
  anchor.classList.add ("jg-entry-visible")

  anchor.appendChild(img)
  // li.appendChild(anchor)

  return anchor
}

