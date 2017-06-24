import {Router} from 'express';
import core from '../../apps/core/routes';

const router = new Router();

export default (app) => {
  app.use('/', core);
};
