const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regenracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} - ${this.apellido}`;
    },
};

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    // const { nombre, apellido, poder, edad = 0 } = Heroe;
    // const nombre = 'pepe';
    nombre = 'Maicol';
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];

const [h1, h2, h3] = heroes;
const [, , h4] = heroes;

console.log(h1);
console.log(h4);

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(nombre, apellido, poder, edad);
