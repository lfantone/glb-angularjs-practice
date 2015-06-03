# Globant AngularJS practice project

El objetivo es armar una aplicacion con la intencion de mostrar los respositorios de un usuario y su información.


## Frontend application

La aplicación debe tener una campo para especificar el nombre de usuario del cual se desea obtener el lista de repositorios.

El listado de repositorios debera permitir lo siguiente:
- Al clickear en un repositorio, debera desplegar un listado con los ultimos commits y pull requests
  Nota: mostrar un spinner (circulito de loading) mientras se obtienen los datos de la API.
- Al hacer click sobre un commit o una pull request, se debe mostrar un modal con la informacion correspondiente.
  Adicionalmente tambien mostrar un link para poder ver el commit o la pull request en github.

### Criterios de aceptación
- Se debe respetar un scaffolding que permita separar cada componente/modulo.
- Todos los controllers, servicios y directivas deben tener unit tests
- Se debe armar un E2E test que verifique que al ingresar un usuario se muestra un listado de repositorios (no hace falta armar todos los E2E tests)
- Dene tener diseño amigable que utilice las ventajas principales de bootstrap.

### Tools
- AngularJS
- Boostrap
- jasmine, karma, protractor
- gulp como task runner

No hay limitaciones en cuanto a la utilizacion de herramientas, librerias o plugins adicionales.