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

const getEmpleado = (id) => {
    return (promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;

        empleado
            ? resolve(empleado)
            : reject(`No existe el empleado con el id ${id}`);
    }));
};

const getSalario = (id) => {
    return (promesa = new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;

        salario
            ? resolve(salario)
            : reject(`No existe el salario con el usuario ${id}`);
    }));
};

const gestInfoUsuario = async (id) => {
    try {
        const promesa = await getEmpleado(id);

        return promesa;
    } catch (err) {
        return err;
    }
};

const id = 10;

gestInfoUsuario(id)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
