---
title: Novedades ECMAScript® 2022
description: Descubre todas las novedades de la nueva especificación para javascript ECMAScript® 2022'
extract: Descubre todas las novedades de la nueva especificación para javascript ECMAScript® 2022'
image: 'novedades-ecmascript-2022.jpg'
category: 'javascript'
createdAt: 2022-07-01
slug: novedades-ecmascript-2022
---

El pasado _22 de junio de 2022_ se aprobó la nueva [especificación ECMAScript® 2022](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) para el lenguaje de programación javascript.

Esta especificación cuenta con interesantes novedades que te voy a contar en un momento para que puedas estar al día y conocerlas de primera mano.

Ten en cuenta que estas novedades no siempre se implementan en los diferentes navegadores al mismo tiempo que se aprueba la nueva especificación, por lo que te recomiendo comprobar antes de usar estas nuevas características que estén soportadas por los navegadores para no llevarte ningún susto de última hora.

Vayamos al grano, estas son las novedades de **ECMAScript® 2022**.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Novedad</th>
      <th>Descripción</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <td>
        <strong>Nuevos miembros para las clases</strong>
      </td>
      <td>
        <p>Ahora las propiedades de las clases pueden ser <i>públicas</i>, <i>privadas</i>, <i>estáticas publicas</i> y <i>estáticas privadas</i>.</p>
        <p>Para indicar que una propiedad o método es privado solo tenemos que poner <i>#</i> delante del nombre.</p>
        <p>Para declarar una propiedad estática solo tenemos que poner <i>static</i> delante del nombre para poder usarla. Para hacer que la propiedad estática sea privada solo tenemos que poner <i>#</i> delante del nombre, ya que si no lo hiciéramos por defecto seria pública.</p>
      </td>
      <td>

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

  </td>
</tr>
    <tr>
      <td>2.</td>
      <td>
        <strong>Top Level Await</strong>
      </td>
      <td>
        <p>Hasta ahora solo se podía usar <i>await</i> en el scope de una función. Con la nueva especificación ya podemos usarlo directamente sin necesidad de una función mientras que nuestros archivos .js estén cargados como módulos.</p>
      </td>
      <td>

```js
/* Antes*/
async function getWeb() {
  return await fetch('https://omarsantos.me')
}

/* Ahora */
const web = await fetch('https://omarsantos.me')
```

  </td>
</tr>
</tr>
    <tr>
      <td>3.</td>
      <td>
        <strong>Nuevo método para los arrays <i>at</i></strong>
      </td>
      <td>
        <p>Este nuevo método permite obtener un elemento desde un índice determinado, pudiendo pasarle índices negativos.</p>
      </td>
      <td>

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

  </td>
</tr>
</tr>
    <tr>
      <td>4.</td>
      <td>
        <strong>Object.hasOwn</strong>
      </td>
      <td>
        <p>Este nuevo método provee una nueva forma segura y siempre accesible que permite revisar si un objeto tiene ciertas propiedades.</p>
      </td>
      <td>

```js
const persona = {
  nombre: 'Omar',
  pais: 'España',
}

console.log(Object.hasOwn(persona, 'pais')) // true
console.log(Object.hasOwn(persona, 'edad')) // false
```

  </td>
</tr>
  </tbody>
</table>

Como ves javascript sigue avanzando cada vez más. Espero que todo esto que te he contado te haya sido útil y lo empieces a poner en práctica.
