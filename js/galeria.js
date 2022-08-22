// const container = document.querySelector('.container');
// const preview = document.querySelector('.prev');
// const active = document.querySelectorAll('.thumb');

// container.addEventListener('click', function (e) {
//   if (e.target.className == 'thumb') {
//     preview.src = e.target.src;
//     preview.classList.add('effect');

//     setTimeout(function () {
//       preview.classList.remove('effect');
//     }, 100);

//     active.forEach(function (thumb) {
//       if (thumb.classList.contains('active')) {
//         thumb.classList.remove('active');
//       }
//     });

//     e.target.classList.add('active');
//   }
// });

// carga imagenes a partir de Objeto con datos
const loadImages = (node, ruta, datos) => {

  const imagenes = document.getElementById(node);

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
  img.alt = ''
  img.classList.add('img-responsive')
  // img.loading = 'lazy';

  var anchor = document.createElement('a');
  anchor.removeAttribute('href');
  anchor.setAttribute('data-lg-size', "1600-1067");
  anchor.setAttribute('data-src',url_imagen)
  anchor.setAttribute('data-sub-html',"<h4>texto</h4><p> parrafo</p>")
  anchor.classList.add ("gallery-item")
  anchor.classList.add ("jg-entry")
  anchor.classList.add ("jg-entry-visible")

  anchor.appendChild(img)
  // li.appendChild(anchor)

  return anchor
}


// const datos = fetch('/galeria/datos.json')
//   .then((response) => response.json())
//   .then((data) => {
//     const ruta = data.CONFIG[0].ruta;
//     const datosCategoria = data.SR_FEMENINO
//     loadImages(ruta, datosCategoria)

//     window.prettyPrint && prettyPrint();
//     $('#captions').lightGallery();
//   });