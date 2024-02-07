# GitHub Repositories Viewer

Este proyecto es una aplicación Node.js diseñada para mostrar los 10 repositorios más populares del usuario "google" en GitHub. Utiliza la GitHub API para recuperar la información de los repositorios y presenta una lista clasificada por el número de estrellas de cada repositorio.

## Características

- Recupera y muestra los 10 repositorios más populares del usuario "google" en GitHub, de dos maneras distintas:
  1) usando el cliente de octokit (https://www.npmjs.com/package/octokit), en este caso no es posible ordenar por estrellas.
  2) usando nodeFetch y un propio filtro.
- Clasifica los repositorios por su número de estrellas.

## Tecnologías Utilizadas

- Node.js
- Express
- Octokit (Cliente oficial de GitHub para Node.js)
- CORS (Para permitir solicitudes de origen cruzado en desarrollo local)

## Endpoints

- GET http://localhost:3000/api/topten/octokit
- GET http://localhost:3000/api/topten/nodefetch


## Ejercicios adicionales

Ejercicios propuestos por el challenge se resolvieron en el archivo "ejercicios.js", constan de su enunciado como tambien la resolucion propuesta.

## Instalación

Primero, clona el repositorio a tu máquina local usando Git:

```bash
git clone https://github.com/GabrielNavas98/Challenge.git
cd Challnge/GitHubAPI
npm install
npm run dev
```
