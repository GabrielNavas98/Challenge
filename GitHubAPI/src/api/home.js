import express from 'express';
import { Octokit } from "octokit";

const router = express.Router();

router.get('/', async (req, res) => {
  const htmlResponse = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>BeMasterChallenge Bienvenida</title>
      <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #333366; }
          p { color: #666; }
          .endpoint { background-color: #f4f4f4; padding: 10px; margin-top: 10px; border-radius: 5px; }
          .ruta { color: #505050; }
          .descripcion { color: #606060; }
      </style>
  </head>
  <body>
      <h1>¡Bienvenidos a BeMasterChallenge!</h1>
      <p>Utiliza los siguientes endpoints para obtener los repositorios más visitados:</p>
      <div class="endpoint">
          <p class="ruta">/api/topten/octokit</p>
          <p class="descripcion">Obtiene los primeros 10 repositorios del usuario 'google' usando Octokit.</p>
      </div>
      <div class="endpoint">
          <p class="ruta">/api/topten/nodefetch</p>
          <p class="descripcion">Obtiene los 10 repositorios más populares del usuario 'google' usando Node Fetch.</p>
      </div>
      <p>Envía una solicitud GET a cualquiera de los endpoints listados arriba para ver los resultados.</p>
  </body>
  </html>
  `;

  res.status(200).send(htmlResponse);
});


  
export default router;
