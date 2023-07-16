import express, { Router } from 'express';
import { unfollow_controller } from '../controllers/unfollow_controller';

const router: Router = express.Router();

router.post('/unfollow', unfollow_controller);

export default router;
