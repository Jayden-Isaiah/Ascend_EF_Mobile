import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Serveur Grimoire sur le port ${port}`);
});
