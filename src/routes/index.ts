import express, { Router } from 'express';
import signupRoutes from './signup_route';
import loginRoutes from './login_route';
import followRoutes from './follow_routes';
import unfollowRoutes from './unfollow_route';
import searchRoutes from './search_routes';
const router: Router = express.Router();

router.use('/auth', signupRoutes, loginRoutes,followRoutes,unfollowRoutes,searchRoutes);

export default router;
