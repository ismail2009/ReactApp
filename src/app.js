import express from 'express';
import path from 'path';
import bodyparser from 'body-parser';
// import routes from './controllers/api/v1/index';

const app = express();
const { PORT } = process.env;

app.use(bodyparser.json())
  .use(bodyparser.urlencoded({
    extended: true
  }))
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  })
  .use((err, req, res) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {}
    });
  })
  .set('port', PORT || 8080);

module.exports = app;
// .use('/api/v1/', routes)
