const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            description: 'Base de la tabla'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            description: 'Lista la tabla de la base especificada'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            description: 'Indica hasta que numero se debe realizar la multiplicacion en la tabla'
        }
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('Valor de la base debe ser numerico');
        }
        return true;
    }).argv;

module.exports = argv;
