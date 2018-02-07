function drag(ev) {
  ev.dataTransfer.setData('img', ev.target.id); // INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANSFERIR 
}

function allowDrop(ev){
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var idPhoto = ev.dataTransfer.getData('img'); // RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(idPhoto));
}

// $('.col-3 img').draggable( {
//   addClasses: "img-fluid",
//   containment: ".collage"
// });