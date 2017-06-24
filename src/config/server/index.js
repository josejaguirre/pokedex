export default function server (app) {

  if (process.env.NODE_ENV === 'prod') {
    app.locals.prod = true;
  } else {
    app.locals.prod = false;
  }
}
