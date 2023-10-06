console.log('Inicio del programa');

setTimeout(() => {
    console.log('primer timeout');
}, 3000);
setTimeout(() => {
    console.log('Segunoo timeout');
}, 0);
setTimeout(() => {
    console.log('Tercero timeout');
}, 0);

console.log('Fin del programa');
