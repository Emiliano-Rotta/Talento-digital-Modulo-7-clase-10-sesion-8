//repaso de la clase pasada

// class NombreClase {
//     constructor(nombre, edad) {
//         this.nombre = nombre
//         this.edad = edad
//     }
//     get obtenerDatos() {
//         return this.nombre
//     }
//     set modificarDatos(nuevoNombre) {

//         this.nombre = nuevoNombre
//     }
//     saludar(){
//         return "Hola " + this.nombre
//     }
// }

// let ejemploUno = new NombreClase('Emiliano', 31)

// console.log(ejemploUno.nombre)
// ejemploUno.nombre = 'Erick'
// console.log(ejemploUno.nombre)

//-------------------------------------------------------------------
// class Usuario {
//     constructor(id, nombre, email) {
//         this.id = id;
//         this.nombre = nombre;
//         this.email = email;
//     }

//     static crear(usuario) {
//         console.log(`Creando usuario: ${JSON.stringify(usuario)}`);
//     }

//     static leer(id) {
//         console.log(`Buscando usuario con ID: ${id}`);
//     }

//     static actualizar(id, nuevosDatos) {
//         console.log(`Actualizando usuario con ID: ${id}, Datos: ${JSON.stringify(nuevosDatos)}`);
//     }

//     static eliminar(id) {
//         console.log(`Eliminando usuario con ID: ${id}`);
//     }
// }

// const nuevoUsuario = new Usuario(1, 'Juan Pérez', 'juan@mail.com');

// Usuario.crear(nuevoUsuario);
// Usuario.leer(1);
// Usuario.actualizar(1, { nombre: 'Juan Actualizado' });
// Usuario.eliminar(1);


// class Ejemplo {
//     static metodoEstatico(){
//         console.log('este es un metodo estatico')
//     }
//     // metodoNormal(){
//     //     console.log('este es un metodo normal')
//     // }
// }

// Ejemplo.metodoEstatico()

// const instancia = new Ejemplo();
// instancia.metodoNormal()

//-------------------------------------------------------------------
//Un modelo es una representación de una tabla de base de datos en el contexto de un ORM. Define los atributos (columnas) y sus tipos, además de las relaciones con otros modelos (si las hay).

// class Producto {
//     constructor(id, nombre, precio, stock) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }

//     calcularDescuento(porcentaje) {
//         return this.precio - (this.precio * porcentaje) / 100;
//     }

//     estaDisponible() {
//         return this.stock > 0;
//     }
// }

// const producto = new Producto(1, 'Laptop', 1500, 10);
// console.log(`Precio con descuento: $${producto.calcularDescuento(10)}`);
// console.log(`Disponibilidad: ${producto.estaDisponible() ? 'Sí' : 'No'}`);


//---------------------------------------------------------------------------
// relaciones

// class Usuario {
//     constructor(id, nombre) {
//         this.id = id;
//         this.nombre = nombre;
//         this.publicaciones = [];
//     }

//     agregarPublicacion(publicacion) {
//         this.publicaciones.push(publicacion);
//     }

//     mostrarPublicaciones() {
//         console.log(`Publicaciones de ${this.nombre}:`);
//         this.publicaciones.forEach((pub) => console.log(`- ${pub.titulo}`));
//     }
// }

// class Publicacion {
//     constructor(id, titulo, contenido) {
//         this.id = id;
//         this.titulo = titulo;
//         this.contenido = contenido;
//     }
// }

// const usuarioUno = new Usuario(1, 'María');
// const usuarioDos = new Usuario(2, 'Rodolfo');

// const pub1 = new Publicacion(1, 'Mi primera publicación', 'Contenido aquí...');
// const pub2 = new Publicacion(2, 'Otra publicación', 'Más contenido...');

// const pub3 = new Publicacion(3, 'Mi primera publicación de Rodolfo', 'Contenido aquí...');
// const pub4 = new Publicacion(4, 'Otra publicación de Rodolfo', 'Más contenido...');

// usuarioUno.agregarPublicacion(pub1);
// usuarioUno.agregarPublicacion(pub2);

// usuarioDos.agregarPublicacion(pub3);
// usuarioDos.agregarPublicacion(pub4);

// usuarioUno.mostrarPublicaciones();
// usuarioDos.mostrarPublicaciones();


//------------------------------------------------------------------
// Ejercicio 1: Calculadora con métodos estáticos (20 min aprox los 2 de static)

// Consigna:
// Crea una clase llamada Calculadora que tenga los siguientes métodos estáticos:

// sumar(a, b): Devuelve la suma de dos números.
// restar(a, b): Devuelve la resta de dos números.
// multiplicar(a, b): Devuelve la multiplicación de dos números.
// dividir(a, b): Devuelve la división de dos números. Si el segundo número es 0, debe devolver el mensaje "No se puede dividir por cero".
// Pasos a seguir:

// Define la clase Calculadora con los métodos mencionados, utilizando la palabra clave static.
// Desde fuera de la clase, realiza llamadas a los métodos estáticos para:
// Sumar 10 y 5.
// Restar 15 y 8.
// Multiplicar 6 y 4.
// Dividir 20 por 4.
// Dividir 20 por 0.
// Salida esperada:
// Debe mostrarse en consola el resultado de cada operación.

// Ejercicio 2: Gestión de usuarios
// Consigna:
// Crea una clase llamada Usuario que represente un sistema básico de gestión de usuarios. La clase debe incluir los siguientes métodos estáticos:

// crear(nombre, email): Recibe un nombre y un email, y devuelve un objeto con esos datos y un id único generado automáticamente (puedes usar un contador interno estático).

// mostrarTodos(): Devuelve una lista de todos los usuarios creados hasta el momento.
// buscarPorId(id): Recibe un ID y devuelve el usuario con ese ID o el mensaje "Usuario no encontrado" si no existe.
// Pasos a seguir:

// Define la clase Usuario con los métodos mencionados.
// Usa un array estático dentro de la clase para almacenar los usuarios creados.
// Desde fuera de la clase:

// Crea 3 usuarios usando el método estático crear.
// Muestra todos los usuarios creados con mostrarTodos.
// Busca un usuario existente por su ID.
// Intenta buscar un usuario con un ID que no exista.

// Salida esperada:
// Debe mostrarse en consola la información de los usuarios creados y los resultados de las búsquedas.