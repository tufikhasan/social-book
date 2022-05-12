const mongoose = require('mongoose');

const mongoURI =
  'mongodb+srv://nadim:nadim123@cluster0.ve7xx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log('connect to mongo successfuly');
  });
};

module.exports = connectToMongo;
