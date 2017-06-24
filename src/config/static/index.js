import express from 'express';

const staticConf = (app) => {

  if (process.env.NODE_ENV === 'prod') {
    // app.locals.STATIC_URL = 'https://s3-us-west-2.amazonaws.com/tarefastatic/static/';
  } else {
    app.locals.STATIC_URL = '/static';
    app.use(app.locals.STATIC_URL, express.static(`${__dirname}/../../../client`));
  }
};

export default staticConf;
