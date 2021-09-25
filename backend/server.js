const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Mengset DotENV
require('dotenv').config();

//Untuk Mengatur Port Express
const app = express();
const port = process.env.PORT || 5000;

//Untuk Konvert JSON
app.use(cors());
app.use(express.json());

//Untuk Menghubung Ke MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB Database Connection Established Successfully`);
})

//Membuat Variabel Untuk Panggil
const forgetPasswordRouter = require('./routes/forgetPasswordRoute');

app.use('/forgetpassword/', forgetPasswordRouter);

//Untuk Koneksi Express
app.listen(port, () => {
    console.log(`Server Is Running On Port: ${port}`);
})