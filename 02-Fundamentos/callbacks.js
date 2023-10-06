// setTimeout(() => {
//     console.log('hola munbdo');
// }, 1000);

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Maicol',
    };

    setTimeout(() => {
        callback(user);
    }, 1500);
};

getUsuarioById(10, ({ id, nombre }) => {
    console.log(id);
    console.log(nombre);
});
