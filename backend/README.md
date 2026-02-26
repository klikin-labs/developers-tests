Prueba técnica node.js
======================


## Descripción de la prueba

Queremos desarrollar un pequeño proyecto que exponga una API de comercios.

Para cada comercio almacenaremos la siguiente información:
+ nombre
+ descripción corta
+ categoría del comercio que puede tener los valores `SHOPPING`, `CAFE`, `PUB`
+ coordenadas (latitud y longitud)

También necesitamos desarrollar el cliente de un servicio externo ficticio (FoodStars)
con puntuaciones de comercios. Este servicio expone una API tipo REST y devuelve
datos en formato JSON:
```
GET /foodstars/:id/rating

Response HTTP 200
{
  "rating": 0..5
}
```

Nuestra API soportorá al menos las siguientes peticiones:
+ `GET /nearby?latitude&longitude&category` que devuelva los comercios hasta 100km de las coordenadas dadas
ordenados por distancia creciente. La categoría es un parámetro opcional.
+ `GET /:id` donde además de los datos persistidos en nuestra BD, queremos que el resultado
incluya la puntuación del comercio en FoodStars.

__Importante: tiene que haber tests de todas las funcionalidades que se implementen.__

## Cuestiones teóricas sobre índices en MongoDB
Imagina que vamos a empezar a almacenar en nuestra BD una colección con cupones de descuento de los comercios.

Aquí tienes un documento de ejemplo de esa colección:
```
{
  "_id": ObjectId("123456789012345678901234"),
  "commerceId": ObjectId("123456789012345678901234"), // 1000 comercios únicos
  "userId": ObjectId("123456789012345678901234"), // 1000000 usuarios únicos
  "promoId": ObjectId("123456789012345678901234"),
  "status": "NEW", // valores permitidos "NEW" y "USED"
  "title": "asdfasdf",
  "description": "asdfasdf"
}
```

1. Nuestro proyecto solamente va a realizar una query sobre esta colección: obtener los cupones con
status `NEW` para un usuario y comercio dados. Indícanos brevemente qué indices de MongoDB serían adecuados y por qué.

2. Nos piden soportar otra query adicional: obtener todos los cupones de un comercio dado. Indícanos
brevemente qué indices de MongoDB serían adecuados para soportar ambas queries y por qué.

## Observaciones

Eres libre de elegir entre JS y TS y de utilizar los frameworks y las librerías que creas necesarias.

Si consideras que algo merece una explicación detallada, no dejes de contarnos por qué has tomado esas decisiones.

Se valorará la organización y técnicas empleadas.

Necesitaremos el proyecto con todo el código para poder probarlo. Puedes enviar un fichero comprimido,
pero no subas tus soluciones a un repo público en GitHub :wink:
