import { Router } from 'express';
import * as CoreController from './controllers.js';


const router = new Router();

router.route('/').get(CoreController.home);

export default router;
