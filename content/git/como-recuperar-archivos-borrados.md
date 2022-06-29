---
title: Cómo recuperar archivos borrados en git
description: '¿Alguna vez no te ha pasado que has borrado un archivo y lo has commiteado, guardandolo tambien en el servidor remoto por error?'
extract: '¿Alguna vez no te ha pasado que has borrado un archivo y lo has commiteado, guardandolo tambien en el servidor remoto por error?'
image: 'como-recuperar-archivos-borrados.jpg'
category: 'git'
createdAt: 2022-06-29
slug: como-recuperar-archivos-borrados
---

¿Alguna vez no te ha pasado que has borrado un archivo y lo has commiteado, guardándolo también en el servidor remoto por error? Por desgracia pasa más veces de lo que creemos, llevándonos las manos después a la cabeza sin saber como poder recuperarlos, ya que no es un simple archivo de texto que se pueda copiar y pegar del log de git.

Por suerte has encontrado este artículo en el que puedo contarte en unos simples pasos como poder recuperarlo fácil y rápidamente. ¡Comencemos!

1. Tenemos que encontrar la última confirmación que afectó al archivo que queremos recuperar.

```bash
git rev-list -n 1 HEAD -- <file_path>
```

2. Y finalmente tenemos que restaurar el archivo encontrado (si el paso 1 nos ha devuelto un id del commit que contiene dicha modificación).

```bash
git checkout <deleting_commit_id>^ -- <file_path>
```

Con estos dos sencillos pasos ya tendrás por fin recuperado tu archivo para volver a commitearlo y no perderlo de nuevo.
