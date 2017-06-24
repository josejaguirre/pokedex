import 'babel-polyfill';

import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import slashes from 'connect-slashes';

import routers from './config/routers';
import nunjucks from './config/template';
import server from './config/server';
import staticConf from './config/static';


const app = new Express();
const port = process.env.PORT || 3000;

// Config initial
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// STATIC FILES
staticConf(app);

// Config Server
server(app);

// Views fro app
nunjucks(app);

// Slash
app.use(slashes());

// Routes for App
routers(app);


app.listen(port, () => {
  console.log('Server running at :3000');
});
