// // ejercicio 1 Calculadora 
// class Calculadora {
//     static sumar(a, b) {
//         return a + b;
//     }

//     static restar(a, b) {
//         return a - b;
//     }

//     static multiplicar(a, b) {
//         return a * b;
//     }

//     static dividir(a, b) {
//         if (b === 0) {
//             return "No se puede dividir por cero";
//         }
//         return a / b;
//     }
// }

// // Llamadas a los métodos estáticos
// console.log(`Suma: ${Calculadora.sumar(10, 5)}`); // Salida: Suma: 15
// console.log(`Resta: ${Calculadora.restar(15, 8)}`); // Salida: Resta: 7
// console.log(`Multiplicación: ${Calculadora.multiplicar(6, 4)}`); // Salida: Multiplicación: 24
// console.log(`División: ${Calculadora.dividir(20, 4)}`); // Salida: División: 5
// console.log(`División por cero: ${Calculadora.dividir(20, 0)}`); // Salida: División por cero: No se puede dividir por cero

// // ejercicio 2 Gestión de usuarios
// class Usuario {
//     static usuarios = []; // Array estático para almacenar los usuarios
//     static contadorId = 1; // Contador estático para generar IDs únicos

//     static crear(nombre, email) {
//         const nuevoUsuario = {
//             id: this.contadorId++,
//             nombre,
//             email
//         };
//         this.usuarios.push(nuevoUsuario); // Agregar el usuario al array estático
//         return nuevoUsuario;
//     }

//     static mostrarTodos() {
//         return this.usuarios;
//     }

//     static buscarPorId(id) {
//         const usuario = this.usuarios.find(u => u.id === id);
//         return usuario ? usuario : "Usuario no encontrado";
//     }
// }

// // Crear usuarios
// console.log(Usuario.crear("Juan Pérez", "juan@mail.com")); // Crea el usuario con ID 1
// console.log(Usuario.crear("María López", "maria@mail.com")); // Crea el usuario con ID 2
// console.log(Usuario.crear("Carlos García", "carlos@mail.com")); // Crea el usuario con ID 3

// // Mostrar todos los usuarios
// console.log("Todos los usuarios:", Usuario.mostrarTodos());

// // Buscar un usuario por ID existente
// console.log("Usuario con ID 2:", Usuario.buscarPorId(2)); // Encuentra a María López

// // Intentar buscar un usuario con un ID inexistente
// console.log("Usuario con ID 10:", Usuario.buscarPorId(10)); // Usuario no encontrado




// Ejercicio 3: Relaciones entre Autor y Libros 

// class Autor {
//     constructor(id, nombre) {
//         this.id = id;
//         this.nombre = nombre;
//         this.libros = [];
//     }

//     agregarLibro(libro) {
//         this.libros.push(libro);
//     }

//     mostrarLibros() {
//         console.log(`Libros de ${this.nombre}:`);
//         this.libros.forEach(libro => console.log(`- ${libro.titulo}`));
//     }
// }

// class Libro {
//     constructor(id, titulo, genero) {
//         this.id = id;
//         this.titulo = titulo;
//         this.genero = genero;
//     }
// }

// // Creación de autores
// const autor1 = new Autor(1, 'Gabriel García Márquez');
// const autor2 = new Autor(2, 'Isabel Allende');

// // Creación de libros
// const libro1 = new Libro(1, 'Cien años de soledad', 'Novela');
// const libro2 = new Libro(2, 'El coronel no tiene quien le escriba', 'Cuento');
// const libro3 = new Libro(3, 'La casa de los espíritus', 'Novela');
// const libro4 = new Libro(4, 'De amor y de sombra', 'Novela');

// // Asignación de libros a autores
// autor1.agregarLibro(libro1);
// autor1.agregarLibro(libro2);

// autor2.agregarLibro(libro3);
// autor2.agregarLibro(libro4);

// // Mostrar libros de cada autor
// autor1.mostrarLibros();
// autor2.mostrarLibros();

// //salida esperada
// // Libros de Gabriel García Márquez:
// // - Cien años de soledad
// // - El coronel no tiene quien le escriba

// // Libros de Isabel Allende:
// // - La casa de los espíritus
// // - De amor y de sombra



// Ejercicio 4: Relaciones entre Estudiantes y Cursos

// class Estudiante {
//     constructor(id, nombre) {
//         this.id = id;
//         this.nombre = nombre;
//         this.cursos = [];
//     }

//     inscribirCurso(curso) {
//         this.cursos.push(curso);
//     }

//     mostrarCursos() {
//         console.log(`Cursos de ${this.nombre}:`);
//         this.cursos.forEach(curso => console.log(`- ${curso.nombre}`));
//     }
// }

// class Curso {
//     constructor(id, nombre, duracion) {
//         this.id = id;
//         this.nombre = nombre;
//         this.duracion = duracion; // duración en horas
//     }
// }

// // Creación de estudiantes
// const estudiante1 = new Estudiante(1, 'Ana Rodríguez');
// const estudiante2 = new Estudiante(2, 'Pedro Gutiérrez');

// // Creación de cursos
// const curso1 = new Curso(1, 'Introducción a la programación', 40);
// const curso2 = new Curso(2, 'Desarrollo web con JavaScript', 60);
// const curso3 = new Curso(3, 'Bases de datos', 50);
// const curso4 = new Curso(4, 'Diseño de interfaces', 30);
// const curso5 = new Curso(5, 'Algoritmos y estructuras de datos', 70);

// // Inscribir estudiantes en cursos
// estudiante1.inscribirCurso(curso1);
// estudiante1.inscribirCurso(curso2);

// estudiante2.inscribirCurso(curso2);
// estudiante2.inscribirCurso(curso3);
// estudiante2.inscribirCurso(curso4);

// // Mostrar cursos de cada estudiante
// estudiante1.mostrarCursos();
// estudiante2.mostrarCursos();

// //salida esperada
// // Cursos de Ana Rodríguez:
// // - Introducción a la programación
// // - Desarrollo web con JavaScript

// // Cursos de Pedro Gutiérrez:
// // - Desarrollo web con JavaScript
// // - Bases de datos
// // - Diseño de interfaces
