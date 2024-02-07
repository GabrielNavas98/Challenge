/**
 * Ejercicio 2: Nomenclatura
 * Te presentamos el siguiente fragmento de código:
 * 
 *  function f(x, y, z) {
 *        let a = x + y;
 *       let b = a * z;
 *      let c = Math.sin(b);
 *     return c;
 *  }
 * 
 * Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor su función.
*/
function calculateSinProduct(x, y, multiplier){
    let sum = x + y;
    let product = sum * multiplier;
    let sinOfProduct = Math.sin(product)
    return sinOfProduct
}

/**
*  Ejercicio 3: Pensamiento lógico
* Escribe una función que tome un número entero como entrada y devuelva un array con
* todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
* número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
*/
function getOddNumber(upTo) {
    const oddNumbers = [];
    for (let number = 1; number <= upTo; number++) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }
    }
    return oddNumbers;
}

/**
 * Ejercicio 4: Modelado de bases de datos
 * Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
 * base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
 * y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
 * de integridad necesarias para que el sistema funcione correctamente. 
 * */

/*
* Consideraciones: 
*   - suponemos que un video puede tener solo 1 autor y varios colaboradores y 1 autor puede tener varios videos.
*   - La tabla de reviews se considero como califición de un usuario relacionado a un comentario sobre un video.
*
* Aclaraciones: 
*   - string? : los signos de interrogación al final del tipo de dato, se refieren a que puede ser nulo en caso necesario.
*   - PK : Primary key
*   - FK : Foreign key
*   - unique: restricción unica, no pueden existir datos con el mismo registro
*/

// Videos
//      videoID         string  (PK)
//      title           string
//      description     string? (200)
//      image_url       string?
//      trailer_url     string?
//      createdAt       Date 
//      authorID        string  (FK)

// rel_CollaboratorsInVideo
//      CollaboratorsInVideoID  string (PK)
//      videoID                 string 
//      collaboratorID          string

// Authors
//      authorID    string  (PK)
//      name        string
//      email       string  (unique)

// Collaborators    
//      collaboratorID  string  (PK)
//      name            string
//      email           string  (unique)

// Comments
//      commentID   string (PK)
//      title       string
//      comment     string (200)
//      createdAt   date
//      updatedAt   date?
//      userID      string (FK)

// rel_CommentsInVideo
//      CommentsInVideoID  string (PK)
//      videoID            string 
//      commentID          string

// Reviews             
//      reviewID    string (PK)
//      commentID   string (FK)
//      rating      int
//      createdAt   date
//      updatedAt   date?

// Users
//      userID      string  (PK)
//      name        string
//      username    string
//      email       string  (unique)
//      createdAt   Date
//      deletedAt   Date?       (en caso de ser no nulo el usuario seguiria registrado pero inhabilitado)

// Passwords
//      passwordID      string (PK)
//      userID          string (FK)
//      hashedPassword  string
//      createdAt       Date
//      deletedAt       Date?   (en caso de ser no nulo la contraseña estara inhabilitada, el usuario tendra en uso la contraseña con el valor deletedAt null)

/*
* Posibles alternativas/mejoras: se puede optar por no utilizar las tablas de autores y colaboradores 
* e integrar una tabla UserType para determinar el rol (author, collaborator, admin, user) del 
* usuario en el sistema segun la logica de negocio necesaria.
*/

/**
Ejercicio 5: Arquitectura del backend
    Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla
    sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
    diseño, etc.

Para el backend de una aplicación de comercio electrónico, consideraría la siguiente estructura y tecnologías:

Tecnologías:
    Framework: Node.js con Express para el servidor debido a su eficiencia y amplia comunidad.
    Base de Datos: mySQL para la gestión de bases de datos relacional o mongoDB dependiendo de las restricciones necesarias por la 
    logica de negocio.
    ORM: Prisma por su buena documentacion y flexibilidad.
    Autenticación: JWT para manejar la autenticación y autorización de forma segura.
    Caching: Redis para almacenar datos de sesión de usuario y caché de productos populares.
    Conteinerizacion: Docker para levantar diferentes microservicios en caso de ser necesarios y para ser agnostico del sistema operativo.
    Docker-compose o kubernetes para orquestrar los contenedores.

Organización de Archivos:

    src/
    controllers/ - Lógica de negocio para manejar las solicitudes.
    routes/ - Definiciones de rutas de Express que utilizan los controladores.
    middlewares/ - Funciones middleware para autenticación, logging, etc.
    services/ - Para los servicios de la api utilizados por los controladores.
    utils/ - Funciones de utilidad y helpers.
    lib/ - Para utilidad de base de datos como orm.
    interfaces/ - Para la definicion de interfaces en caso de usar TypeScript.
    DAO/ - Para la definicion de las funciones encargadas del acceso de datos de la base de datos.
    config/ - Configuraciones generales de la aplicación.
    docs/ - Documentacion complementaria especifica del repositorio.
    tests/ - tests de diferentes niveles de prueba para la aplicacion como units, e2e, etc. 

Patrones de Diseño:

    MVC (Modelo-Vista-Controlador): Para separar la lógica de negocio, la interfaz de usuario y la manipulación de datos.
    Singleton: Para conexiones a la base de datos o configuraciones que deben ser instanciadas una sola vez.
    Chain of responsibility: es el patron basicamente utilizado por la logica de los middlewares donde cada middleware pasa un objeto y/o contexto (req,res) a funciones siguientes para su procesamiento.
    Factory: Puede ser posible utilizar patron factory para crear diferentes articulos del E commerce en caso de ser necesario.
    El orden para escribir los endpoints en la api es el siguiente: GET, POST, PUT, DELETE, PATCH, OPTIONS. Para mejorar la lectura y la busqueda del endpoint deseado debemos respetar este orden al momento de implementarlo.
*/

/**
Ejercicio 6: Nomenclatura
Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: ba variableses de datos,s, funciones,
clases, git, etc. 

Bases de Datos:
-> Utilizar snake_case para nombres de tablas y columnas.
-> Prefijar las tablas de relación con rel_.

Variables y Funciones:
->Utilizar camelCase para nombres de variables y funciones.
->Nombres descriptivos: getUserByID en lugar de gub.
-> Acronimos: los acronimos deben ir siempre en mayusculas como ID o OS

Clases:
->Utilizar PascalCase para nombres de clases.
->Nombres descriptivos que reflejen su propósito, ej., ShoppingCart.

Git:
->Branches: Utilizar prefijos para describir el proposito de la rama tipo/descripcion-corta, ej., feature/add-user-login.
->Commits:  
    ->Manténlo breve (menos de 150 caracteres en total), hacer menos cambios a la vez puede ayudar con esto.
    ->Usa el modo imperativo, esta convención se alinea con los mensajes de commit generados por comandos como git merge y git revert.
    ->Añade un título (Menos de 50 caracteres).
    ->Usa mayúsculas en las iniciales (por ejemplo, "Añadir Registro" en lugar de "añadir registro").
    ->Añade un cuerpo (opcional, menos de 100 caracteres).
    ->Explica QUÉ es el cambio, pero especialmente POR QUÉ fue necesario el cambio.
    ->Deja una línea en blanco entre el título y el cuerpo.
    ->Separa párrafos en el cuerpo con líneas en blanco.
    ->Usa un guion (-) para puntos si es necesario.
    ->Usa sangrías colgantes si es necesario.

    El commit contiene los siguientes elementos estructurales para comunicar la intención a los consumidores de tu biblioteca:

    fix: un commit del tipo fix corrige un bug en tu base de código (esto se correlaciona con PATCH en la Versionado Semántico).
    feat: un commit del tipo feat introduce una nueva característica en la base de código (esto se correlaciona con MINOR en la Versionado Semántico).
    BREAKING CHANGE: un commit que tiene un pie de página BREAKING CHANGE:, o añade un ! después del tipo/ámbito, introduce un cambio importante en la API (correlacionándose con MAJOR en la Versionado Semántico). Un BREAKING CHANGE puede ser parte de commits de cualquier tipo.
    Tipos otros que fix: y feat: son permitidos, por ejemplo, @commitlint/config-conventional (basado en la convención de Angular) recomienda build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, y otros.
    Pies de página distintos de BREAKING CHANGE: <descripción> pueden ser proporcionados y siguen una convención similar al formato de tráiler de git.
    Tipos adicionales no son mandados por la especificación de Commits Convencionales, y no tienen efecto implícito en el Versionado Semántico (a menos que incluyan un BREAKING CHANGE). Un ámbito puede ser proporcionado al tipo de un commit, para proporcionar información contextual adicional y se contiene dentro de paréntesis, por ejemplo, feat(parser): añadir capacidad para analizar arreglos.

General:
    Evitar abreviaturas a menos que sean ampliamente conocidas.
    Los nombres deben ser autoexplicativos, evitando comentarios innecesarios.
    Estas políticas deben ser adaptadas según las necesidades específicas del equipo y el proyecto, y estar documentadas en un lugar accesible para todos los miembros del equipo

*/