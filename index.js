const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handle')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if ( whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


/* app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
}); */

app.listen(port, () => {
  console.log('Mi port ' + port);
});
