const empleados = [
    {
        id: 1,
        nombre: 'Maicol',
    },
    {
        id: 2,
        nombre: 'Linda',
    },
    {
        id: 3,
        nombre: 'Karen',
    },
];
const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

// const getEmpleadoById = (id) => {
//     const empleado = empleados.find((e) => e.id === id);

//     if (!empleado) return 'No existe el empleado';

//     return empleado;
// };
// console.log(getEmpleadoById(5));

const getEmpleadoByName = (id) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if (!empleado) return 'No existe el empleado';

    return empleado;
};
console.log(getEmpleadoByName(1));
