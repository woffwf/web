const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Додайте для роботи з шляхами файлів

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Підключення до MongoDB
mongoose.connect('mongodb+srv://sania:klapan@wallet.mt9nody.mongodb.net/', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Схема для напою
const BeverageSchema = new mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    volume: String,
    description: String,
    image: String
});

const Beverage = mongoose.model('Beverage', BeverageSchema);

// CRUD операції
// CRUD оперції
// CREATE
app.post('/beverages', (req, res) => {
    const beverage = new Beverage(req.body);
    beverage.save()
        .then(item => res.status(201).send(item))
        .catch(err => res.status(400).send(err));
});

// READ
app.get('/beverages', (req, res) => {
    Beverage.find()
        .then(items => res.send(items))
        .catch(err => res.status(500).send(err));
});

// UPDATE
app.put('/beverages/:id', (req, res) => {
    Beverage.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.send(item))
        .catch(err => res.status(400).send(err));
});

// DELETE
app.delete('/beverages/:id', (req, res) => {
    Beverage.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(400).send(err));
});
// ...

// Обслуговування статичних файлів з папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Всі інші GET запити не до API повертатимуть наш HTML файл (index.html з папки 'public')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущений на порту ${PORT}`);
});