const fs = require('fs');
const color = require('colors');

const multiplicar = async (base = 5, listar = false, hasta) => {
    let salida = '', consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${ base } X ${ i } = ${ base * i } \n`;
        consola += ` \n${ base } ${ 'X'.green } ${ i } ${ '='.green } ${ base * i }`;
    }
    if (listar) {
        console.log('============================'.green);
        console.log(`Tabla del ${ base }`.blue.underline);
        console.log(consola);
        console.log('============================'.green);
    }
    try {
        fs.writeFileSync(`./archivos/Tabla-${base}.txt`, salida);
        return `Archivo Tabla-${base}.txt guardado correctamente...`;
    }
    catch (error) {
        throw error;
    }

    // fs.writeFile(`Tabla-${base}.txt`, salida, (error) => {
    //     if(error) {
    //         throw error;
    //     }
    //     console.log('Archivo guardado correctamente...');
    // });
}

module.exports = { multiplicar }
