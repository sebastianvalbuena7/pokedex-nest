<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarollo
1. Clonar el repo
2. Ejecutar 

```
npm install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en dev:
```
npm run start:dev
```

5. Reconstruir la base de datos con la semilla
```
localhost:3000/api/v2/seed
```

## Stack usado
* Mongo
* Nest