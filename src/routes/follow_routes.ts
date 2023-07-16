import express, { Router } from 'express';
import { follow_controller } from '../controllers/follow_controller';

const router: Router = express.Router();

router.post('/follow', follow_controller);

export default router;
