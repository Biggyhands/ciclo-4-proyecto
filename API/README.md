# ciclo-4-proyecto!

## API

- Esta API funciona con persistencia de datos en la nube
- Se uso Atlas Database, servicio de MongoDB
- Es necesario que la API REST este encendida

## Iniciar API

    npm run start

## Peticiones CRUD

-Estas peticiones podrán usarse por medio de Postman o el archivo requests.http que se encuentra en la raiz del proyecto (Dando clic a "send request")

    - Crear ticket
    http://localhost:9000/api/tickets/create

    - Obtener listado de tickets
    http://localhost:9000/api/tickets 

    - Obtener listado de tickets por ID 
    http://localhost:9000/api/tickets/{id}

    - Actualizar ticket por ID 
    http://localhost:9000/api/tickets/update/{id}

    - Eliminar ticket por ID 
    http://localhost:9000/api/tickets/delete/{id}

