const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./controllers')

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});