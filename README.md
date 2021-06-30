# Tablas de multiplicar
***
Aplicación por consola encargada de generar una tabla de multiplicar, a partir
de tres parametros y generando un archivo de texto.

## Parametros requeridos por consola
***
Se solicitan los siguientes parámetros:
*  **-b**, **--base**   Base de la tabla.                                   [number] [required]
*  **-l**, **--listar** Lista la tabla.                                     [boolean] [default: false]
*  **-h**, **--hasta** Indica hasta que numero se debe realizar la tabla.   [number] [default: 10]                                 [number] [default: 10]
.
## Paquetes de terceros usados
* [nodemon](https://www.npmjs.com/package/nodemon): ^2.0.7
* [colors](https://www.npmjs.com/package/colors):   ^1.4.0
* [yargs](https://www.npmjs.com/package/yargs):     ^17.0.1

## Instalación
****
Se debe instalar los archivos necesarios de node:

```
    npm install
```

## Ejemplo
****
Se especifica la tabla de base 9, hasta 11, listando en consola el resultado.

```
    node app.js -b 9 -h 11 -l
```

En la carpeta **archivos** se genera el archivo de texto con la tabla de multiplicar.

