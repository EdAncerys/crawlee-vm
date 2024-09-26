import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { runCrawler } from './crawler.ts';

const app = express();
app.use(express.json()); // Parse JSON bodies

dotenv.config(); // Load .env.local file

// --------------------------------------------------------------------------------
// 📌  Configuration
// --------------------------------------------------------------------------------
const PORT = process.env.PORT || 8080;

app.get('/', async (_req: Request, res: any) => {
  try {
    console.log('🤖 Server is running ok...');

    return res.status(200).json({ message: '🤖 Server is running ok...' });
  } catch (err) {
    console.error('Error', err);
    return res.status(500).json({ message: 'Error' });
  }
});

app.post('/run-script', async (req: Request, res: any) => {
  try {
    console.log('Running script...');
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: 'URL is required' });
    }

    await runCrawler(['https://crawlee.dev']);

    return res.status(200).json({ message: 'Script ran successfully' });
  } catch (error) {
    console.error('Error running script', error);
    return res.status(500).json({ message: 'Error running script' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
