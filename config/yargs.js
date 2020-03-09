const descripcion = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
  }
};

const completado = {
  completado: {
    default: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado la terea'
  }
}


const argv = require('yargs').command('crear', 'Crea un elemento por hacer', {
  descripcion
}).command('actualizar', 'Actualiza el estado completado de una tarea', {
  descripcion,
  completado

}).command('borrar', 'Borra la tarea', {
  descripcion,
}).help().argv;

module.exports = {

  argv
}