import express from 'express';
import { creer, detail, modifier } from '../controleurs/personnagesControleur.js';
import authentifier from '../middleware/authentifier.js';

const router = express.Router();

router.use(authentifier);
router.get('/:id', detail);
router.post('/', creer);
router.patch('/:id', modifier);

export default router;
