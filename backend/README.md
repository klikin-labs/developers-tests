Prueba técnica node.js
======================


## Descripción de la prueba

Aquí te proporcionamos un mini-proyecto node.js que define una API para acceder a una BD de comercios.

+ completa el código de aplicación necesario para que pasen los tests.
+ añade un nuevo campo `category` al comercio. Este campo puede tener los valores `CAFE` o `PUB`.
+ implementa soporte para que la API atienda a peticiones tipo `GET /?lat&lng&category`
+ crea un cliente de un servicio externo ficticio (FoodStars) con puntuaciones de comercios.
Este servicio expone una API tipo REST, acepta y devuelve datos en formato JSON.
En el entorno de test, puedes consumir el servicio en la siguiente URI:
```
GET http://localhost:1337/foodstars/:commerceId/rating
200 {"commerceId": "xxxx", rating: 0..5}
```
+ añade a la API un método `GET /:id` que recupere los datos de un comercio dado su id.
Además de los datos persistidos en nuestra BD, queremos que el resultado incluya la puntuación
del comercio en FoodStars.
+ imagina que vamos a empezar a almacenar en nuestra BD una colección con cupones de descuento de los comercios.
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
Nuestra API solamente va a realizar una query sobre esta colección: obtener los cupones con status `NEW` para un usuario y comercio dados.
Indícanos brevemente qué indices de MongoDB serían adecuados y por qué.
+ imagina que sobre la colección de cupones anterior ahora nos piden soportar otra query adicional: obtener todos los cupones de un comercio dado.
Indícanos brevemente qué indices de MongoDB serían adecuados para soportar ambas queries y por qué.

## Observaciones

Eres libre de realizar las modificaciones que creas necesarias y, si consideras que algo merece
una explicación detallada, no dejes de contarnos por qué has tomado esas decisiones.

Se valorará la organización y técnicas empleadas.

Necesitaremos el proyecto con todo el código para poder probarlo. Puedes enviar un fichero comprimido,
pero no subas tus soluciones a un repo público en GitHub :wink:


## Requisitos de sistema
+ node.js v12 o superior
+ MongoDB 4.0 o superior
