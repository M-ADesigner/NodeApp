const fs = require('fs');

const crearArchivo = async (base = 5) => {
    try {
        console.log('========================');
        console.log('   Tabla del', base);
        console.log('========================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `5 x ${[i]} = ${base * i}\n`;
        }
        return fs.writeFileSync(`tabla-${base}.txt`, salida);
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo: crearArchivo,
};
