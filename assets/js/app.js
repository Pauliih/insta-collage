function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id); 
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var idPhoto = ev.dataTransfer.getData('text'); // RECUPERAMOS LOS DATOS
  var srcPhoto = document.getElementById(idPhoto).src;
  
  // creo un nuevo elemento con la ruta de la imagen que tomé
  ev.target.innerHTML = "<img class='img-collage' src='" + srcPhoto + "'>";
}

// $('.col-3 img').draggable( {
//   addClasses: "img-fluid",
//   containment: ".collage"
// });