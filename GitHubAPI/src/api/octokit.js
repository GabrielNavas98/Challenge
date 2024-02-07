import express from 'express';
import { Octokit } from "octokit";

const router = express.Router();

const octokit = new Octokit({
    auth: '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' //ENV
})

router.get('/', async (req, res) => {
    const repos = await octokit.request('GET /users/google/repos', {
        username: 'GOOGLE',
        per_page: 10,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    res.status(200).json({repos: repos.data})
  })
  
export default router;
