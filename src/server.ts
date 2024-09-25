import express, { Request, Response } from 'express';

const app = express();
app.use(express.json()); // Parse JSON bodies
const PORT = 8080;

app.get('/', (_req, res) => {
  console.log('Running script...');

  res.send('Express + TypeScript Server');
});

app.post('/run-script', async (req: Request, res: any) => {
  console.log('Running script...');
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.status(200).json({ message: 'Script ran successfully' });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
