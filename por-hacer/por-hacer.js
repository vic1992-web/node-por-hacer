const fs = require('fs');


let listadoPorHacer = [];

const gurdarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {

    if (err) throw new Error('No se pudo grabar', err);

  });
}

const cargarDB = () => {

  try {
    listadoPorHacer = require('../db/data.json');

  } catch (error) {
    listadoPorHacer = [];
  }


}

const getListado = () => {
  cargarDB();

  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });

  if (index >= 0) {

    listadoPorHacer[index].completado = completado;
    gurdarDB();
    return true;
  } else {
    return false;
  }

}
const borrar = (descripcion) => {
  cargarDB();
  let nuevoListado = listadoPorHacer.filter(tarea => {
    return tarea.descripcion !== descripcion;
  });
  if (listadoPorHacer.length === nuevoListado.length) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    gurdarDB();
    return true;
  }
}
const crear = (descripcion) => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);
  gurdarDB();

  return porHacer;
}


module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}