import cors from 'cors';
import express from 'express';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/sante', (_req, res) => {
  res.status(200).json({ statut: 'ok' });
});
