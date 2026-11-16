import express from 'express';
import { creer, lister, listerPersonnages, resume } from '../controleurs/campagnesControleur.js';
import authentifier from '../middleware/authentifier.js';

const router = express.Router();

router.use(authentifier);
router.get('/', lister);
router.post('/', creer);
router.get('/:id/personnages', listerPersonnages);
router.get('/:id/resume', resume);

export default router;
