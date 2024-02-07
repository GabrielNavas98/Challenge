import express from 'express';
import cors from 'cors';

import octokit from './api/octokit.js';
import nodeFetch from './api/nodeFetch.js';
import home from './api/home.js';

const port = 3001
const baseUrl = 'http://localhost'

const app = express();

const corsOptions = {
    origin: `${baseUrl}:${port}`,
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', home);

// Ruta que utiliza Octokit para interactuar con la GitHub API
app.use('/api/topten/octokit', octokit);

// Ruta personalizada que utiliza fetch para interactuar con la GitHub API
app.use('/api/topten/nodefetch', nodeFetch);

app.listen(port, () => {
  console.log(`Listening: ${baseUrl}:${port}`);
});

export default app;


