import mongoose from "mongoose";

const dbConfig =
  "mongodb+srv://pascoalkahamba:pascoalkahamba@pascoalkahamba.gzqt4nr.mongodb.net/annotations?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {});

module.exports = connection;
