import express, { Router } from 'express';
import signupRoutes from './signup_route';
import loginRoutes from './login_route';

const router: Router = express.Router();

router.use('/auth', signupRoutes, loginRoutes);

export default router;
