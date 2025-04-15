# QR vCard Generator

Este proyecto es una aplicación web simple que permite generar códigos QR con información de contacto en formato vCard. Puede utilizarse para compartir datos personales o profesionales fácilmente escaneando el QR desde un teléfono móvil.

## Características

- Generación de QR con formato **vCard 3.0**
- Campos de entrada: nombre, apellidos, organización, cargo, email, teléfono, dirección y sitio web
- Compatible con lectores de QR que reconocen vCards (contactos)
- Soporte para dos idiomas: español e inglés (se selecciona automáticamente según el navegador)
- Interfaz adaptada a móviles mediante Bootstrap 5

## Tecnologías

- HTML5
- JavaScript
- Bootstrap 5
- Librería [`qrcode`](https://github.com/soldair/node-qrcode) para generar códigos QR

## Cómo usar

1. Abre el archivo `index.html` en tu navegador.
2. Introduce los datos en el formulario.
3. Pulsa el botón "Generar QR" / "Generate QR".
4. El código QR aparecerá justo debajo y podrá ser escaneado o descargado como imagen.



## Requisitos

No se necesita instalación ni servidor. Es una aplicación estática y puede usarse directamente en local o subirse a cualquier hosting.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT.
