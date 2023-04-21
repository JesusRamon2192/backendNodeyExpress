const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});


/* app.get('/categories/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json({
    categorieId,
    productId
  })
}) */

app.listen(port, () => {
  console.log('Mi port ' + port);
});
