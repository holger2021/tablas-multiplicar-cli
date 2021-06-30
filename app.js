const { multiplicar } = require('./helpers/multiplicar') ;
const argv = require('./config/yargs');
const color = require('colors');

multiplicar(argv.base, argv.listar, argv.hasta).then((respuesta) => {
    console.log(respuesta.rainbow);
}).catch((error) => {
    console.log(error.red);
});



