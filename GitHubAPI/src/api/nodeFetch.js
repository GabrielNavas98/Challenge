import express from 'express';
import fetch from 'node-fetch'
const router = express.Router();

const url = 'https://api.github.com/users/google/repos';

router.get('/', async (req, res) => {
    let topRepos = []
    try {
        const response = await fetch(url);
        const repos = await response.json();
        const sortedRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        topRepos = sortedRepos.slice(0, 10);
      } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
      }
    res.status(200).json({repos: topRepos})
  })
  
export default router;
