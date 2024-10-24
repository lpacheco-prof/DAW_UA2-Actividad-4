// app.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'mysql_db',
  user: 'root',
  password: 'rootpass',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación web conectada a MySQL!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

//app.listen(port, '0.0.0.0');
