import express from 'express';
import { connexion, deconnexion } from '../controleurs/authControleur.js';
import authentifier from '../middleware/authentifier.js';

const router = express.Router();

router.post('/connexion', connexion);
router.post('/deconnexion', authentifier, deconnexion);

export default router;
