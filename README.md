# webRuta6Club

**Trabajo Final Desarrollo Web**

Este desarrollo fue realizando utilizabdo todas las funcionalidades que se fueron aprediendo a lo largo del curso. Primero se realizo la maquetacion de las paginas respetando su estructura a traves de etiquetas semanticas. Luego se le aplicando estilo a estas utilizando distintas herramientas. Entre ellas la aplicacion de un framework, como bootstrap. Se realizo el diseño responsive tanto con este framework como con Grids, donde surgieron las primeras complicaciones para plasmar el diseño.
Finalmente, se todo lo desarrollado en css puro a un archivo que utiliza la herramienta de desarrollo sass que nos permite generar un archivo de estilo automaticamente, escribiendo con una estructura mucho mas prolija y legible para los desarrolladores, permitiendo uso de anidacion, de variables y de mixins. Esto tambien resulto bastante complejo, pero con la practica y leyendo el archivo css generado por sass se pudieron ir puliendo errores del desarrollo.
Adjunto a continuacion los links para la revsion del trabajo. En la page de contacto,, al presionar el icono de facebook messenger, nos llevara a la pagina de error 404. 

Links

Repositorio: https://github.com/luchoslp1989/PF-Perez.git
Github Pages: https://luchoslp1989.github.io/PF-Perez/
Servidor: https://ruta6club.000webhostapp.com/


**Trabajo Final Javascript**

En este desarrollo se aplican todos los conocimientos adquiridos durante el curso. En la page de novedades, cargamos su contenido de manera dinamica, con la funcion fetch, levantando los datos necesarios desde un archivos json. Por otra parte en la page de contacto, aplicamos la cptura de eventos, modificando y mostrando un mensaje en el DOM, y guardando los datos capturados desde un formulario, en locaStorage. También, en la page de login, capturamos datos de un formulario de registro, para crear objetos de la clase Usuario, pusherlos en un array para luego guardarlos en localStorage. Por ultimo, tenemos una funcion de login, donde recuperamos los usuarios guardados en localStorage, y luego de capturar datos de otro formulario, verificamos si ese usuario ya existe, es decir, se registro con anterioridad, para luego mostrar una alerta de bienvenida con datos del usuario, recuperados de local, y luego modificamos elm dom mostrando una card con los datos del usuario, tambien levantadis de localStorage.