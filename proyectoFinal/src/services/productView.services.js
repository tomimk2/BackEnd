import __dirname from '../util.js';
let visitas = { visitas: { items: 0, item: 0 } };
import { readFileSync, promises } from 'fs';
const data = JSON.parse(
  readFileSync(__dirname + '/json/products.json', 'utf8'),
);

class Product {
  async create(req, res) {
    const insertData = req.body;
    insertData.id = data.length;
    console.log(insertData);
    data.push(insertData);
    await promises.writeFile(
      __dirname + '/json/products.json',
      JSON.stringify(data),
    );
    return res.redirect('/products');
  }
  getAll(_req, res) {
    visitas.visitas.items = visitas.visitas.items + 1;
    //res.json({ items: data, cantidad: data.length });
    const dataFilter = data.filter((val) => Object.keys(val).length);
    res.render('index', { products: dataFilter });
  }
  findOneById(req, res) {
    let id = req.params.id;
    let text = data.find((val) => id == val.id);
    return res.json(text ? text : { error: 'Producto no encontrado' });
  }
  async deleteOneById(req, res) {
    let id = req.params.id;
    if (id <= data.length) {
      //data.splice(id + 1, 1); --> si borro la posicion tendria problemas con el id
      data[id] = {};
      await promises.writeFile(
        __dirname + '/json/products.json',
        JSON.stringify(data),
      );
      return res.json({ response: 'Producto Eliminado' });
    } else {
      return res.json({ error: 'Producto no encontrado' });
    }
  }
  async updateOneById(req, res) {
    let id = parseInt(req.params.id);
    console.log(req);
    if (id <= data.length) {
      data[id] = req.body;
      data[id].id = id;
      console.log('esto es data:', data.length, 'este es el id:', id);
      await promises.writeFile(
        __dirname + '/json/products.json',
        JSON.stringify(data),
      );
      return res.json({ producto: 'Producto Actualizado' });
    } else {
      return res.json({ error: 'Producto no encontrado' });
    }
  }
  getDataId(id) {
    return data[id];
  }
  random(_req, res) {
    res.json(data[Math.floor(Math.random() * data.length)]);
    visitas.visitas.item = visitas.visitas.item + 1;
  }
  visitas(_req, res) {
    res.json(visitas);
  }
}

export default new Product();
