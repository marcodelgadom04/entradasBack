## Proyecto

Proyecto de NodeJs express donde se crean las funciones para un crud, en este caso la entidad se llama entradas, donde se realizan las funciones de create, get, getByID, update y delete.

En este ejercicio utilizamos la librería de sequelize la cual nos ayuda a crear el modelo de entradas.

---

## Prerrequisitos

Antes de ejecutar el proyecto, se tiene que crear una base de datos. En este ejercicio utilizamos MySQLWorkbench, En el cual solo instalamos la herramienta y creamos la base de datos.

Una vez que se tiene creada la base de datos ya no hay que hacer nada adicional, en el archivo .env del proyecto encontraremos la configuración de conexión con la base de datos.

```JavaScript
PORT=3000
DB_USER='root'
DB_PASSWORD='******'
DB_HOST='localhost'
DB_NAME='examen'
DB_PORT='3306'
```

En este punto tienen que cambiar el User, el Password, Host, el puerto y el nombre que se le dio a la base de datos.

---

## Instalación

Utilice la versión de NodeJs 18.18.2 para este proyecto, una vez en esa versión ejecute el siguiente comando para instalar las dependencias.

```npm
npm install
```

Una vez que se terminen de instalar las dependencias, ejecutamos el siguiente comando para iniciar el proyecto.

```npm
npm run start
```

Cuando se ejecute el comando podremos ver en la terminal unos logs que indican que se ha sincronizado y conectado a la base de datos correctamente y el puerto donde se está ejecutando nuestra aplicación.

Para verificar que funciona correctamente, abrimos nuestro navegador y pegamos http://localhost:3000/ y nos mostrara en pantalla una etiqueta con el texto Proyecto de entradas
