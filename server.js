require('dotenv').config();
require('module-alias/register');
const mongoose = require('mongoose');
const database = require('@config/database');
const boot = require('@service/boot');

mongoose.Promise = global.Promise;

if (database.db.connection) {
  mongoose.connect(database.db.connection, database.aptions, boot);
} else {
  console.log('No connection string');
}
