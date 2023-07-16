import express, { Router } from 'express';
import { search_controller } from '../controllers/search_controller';

const router: Router = express.Router();

router.post('/search', search_controller);

export default router;
