---
title: Novedades ECMAScript® 2022
description: Descubre todas las novedades de la nueva especificación para javascript ECMAScript® 2022
extract: Descubre todas las novedades de la nueva especificación para javascript ECMAScript® 2022
image: 'novedades-ecmascript-2022.jpg'
category: 'javascript'
createdAt: 2022-07-01
slug: novedades-ecmascript-2022
---

El pasado _22 de junio de 2022_ se aprobó la nueva [especificación ECMAScript® 2022](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) para el lenguaje de programación javascript.

Esta especificación cuenta con interesantes novedades que te voy a contar en un momento para que puedas estar al día y conocerlas de primera mano.

Ten en cuenta que estas novedades no siempre se implementan en los diferentes navegadores al mismo tiempo que se aprueba la nueva especificación, por lo que te recomiendo comprobar antes de usar estas nuevas características que estén soportadas por los navegadores para no llevarte ningún susto de última hora.

Vayamos al grano, estas son las novedades de **ECMAScript® 2022**.

#### 1. Nuevos miembros para las clases

Ahora las propiedades de las clases pueden ser _públicas_, _privadas_, _estáticas publicas_ y _estáticas privadas_.
Para indicar que una propiedad o método es privado solo tenemos que poner _#_ delante del nombre.
Para declarar una propiedad estática solo tenemos que poner _static_ delante del nombre para poder usarla. Para hacer que la propiedad estática sea privada solo tenemos que poner _#_ delante del nombre, ya que si no lo hiciéramos por defecto seria pública.

```js
class MiClaseJS {
  #propiedadPrivada = 'Esta es una propiedad privada'
  propiedadPublica = 'Esta es una propiedad pública'
  static #propiedadEstaticaPrivara = 'Esta es una propiedad estática privada'
  static propiedadEstaticaPublica = 'Esta es una propiedad estática pública'

  #metodoPrivado() {}

  metodoPublico() {}

  static #metodoEstaticoPrivado() {}
  static metodoEstaticoPublico() {}
}
```

#### 2. Top Level Await

Hasta ahora solo se podía usar _await_ en el scope de una función. Con la nueva especificación ya podemos usarlo directamente sin necesidad de una función mientras que nuestros archivos .js estén cargados como módulos.

```js
/* Antes*/
async function getWeb() {
  return await fetch('https://omarsantos.me')
}

/* Ahora */
const web = await fetch('https://omarsantos.me')
```

#### 3. Nuevo método para los arrays "_at_"

Este nuevo método permite obtener un elemento desde un índice determinado, pudiendo pasarle índices negativos.

```js
const frutas = ['manzana', 'pera', 'sandia', 'melón']

/* Antes */
const melón = frutas[frutas.length - 1]
const pera = frutas[1]
const sandia = frutas[frutas.length - 2]

/* Ahora */
const melón = frutas.at(-1)
const pera = frutas.at(1)
const sandia = frutas.at(-2)
```

#### 4. Object.hasOwn

Este nuevo método provee una nueva forma segura y siempre accesible que permite revisar si un objeto tiene ciertas propiedades.

```js
const persona = {
  nombre: 'Omar',
  pais: 'España',
}

console.log(Object.hasOwn(persona, 'pais')) // true
console.log(Object.hasOwn(persona, 'edad')) // false
```

Como ves javascript sigue avanzando cada vez más. Espero que todo esto que te he contado te haya sido útil y lo empieces a poner en práctica.
