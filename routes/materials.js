import express from 'express';
import { getMaterials, recommendMaterials } from '../controllers/materialController.js';

const router = express.Router();

router.get('/materials', getMaterials);
router.post('/recommend', recommendMaterials);

export default router;
