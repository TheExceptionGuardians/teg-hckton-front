# The exception guardians
## Front hackaton app


Requisitos antes de empezar a desarrollar
 * Instalar [NodeJS]( https://nodejs.org/en/) 
 * Instalar Bower ejecutando `npm install -g bower`.
 * Instalar Gulp ejecutando `npm install -g gulp`.
 * Instalar dependencias de NodeJS ejecutando `npm install`.
 * Instalar dependencias de bower ejecutando `bower install`.

## Running
Arrancar localmente ejecutando `npm run serve` el servidor se levantará en `http://localhost:3000`
It uses BrowserSync that provides live reload which refresh the application in the browser with any changes produced on the source.   

## Testing

### Unit testing

`npm run test` o  `npm run test:auto` para lanzar los test unitarios definidos con Jasmine (testing framework) y Karma (test Runner).
  
### E2E testing
> Note: Es necesario tener instalado el JDK para lanzar el testing E2E
[download](http://www.oracle.com/technetwork/java/javase/downloads)

`npm run protractor`  para lanzar los test end to end con el framework protactor, el web driver de selenium integrado con Angular. 

## Build

`npm run` o `npm run build` compila y optimiza los fuentes en el directorio /dist listo para publicar en *prducción*. Además genera la documentación en la carpeta docs/api.  


### Configuración de entorno

Están definidos dos entornos de ejecución distintos. `dev y prod`. Cada tarea de gulp permite añadir el perfil de ejecución.

```javascript
npm run serve --dev
npm run serve --pro
npm run serve:dist --dev
npm run serve:dist --pro
npm run build --dev
npm run build --pro
```
En el fichero `conf/app.config.json`, se pueden definir parámetros de cofiguración dependientes del entorno.

## Lista de tareas de gulp

* `npm run` or `npm run build` construye una versión optimizada en `/dist`
* `npm run serve` para levantar el servidor sincronizado con el código fuente.
* `npm run serve:dist` para levantar el servidor con la versión lista para producción.
* `npm run serve:apidoc` para lanzar el servidor web apuntando a la documentación.
* `npm run test` para lanzar los tests unitarios. 		
* `npm run css_test` para lanzar los tests de css. 									
