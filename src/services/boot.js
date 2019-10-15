const database = require('@config/database');
const app = require('@app');

module.exports = error => {
  if (error) {
    return console.log('error: ', error);
  }
  app.listen(database.app.port, err => {
    if (err) {
      return console.log('err: ', err);
    }
    return console.log('CONEXÃO REALIZADA COM SUCESSO!\n');
  });
};
