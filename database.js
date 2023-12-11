const database = {
  
    host: "localhost",
    port: 3306,
    database: "nonalcohol_store",
    user: "root",
    password: "70658743"
  };
  
  module.exports = database;
  
  connection.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }
  
    // Створити таблицю
    connection.query('CREATE TABLE beverage (id INT NOT NULL AUTO_INCREMENT, brand VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL, volume DECIMAL(10,2) NOT NULL, image VARCHAR(255) NOT NULL, PRIMARY KEY (id))', (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Таблиця створена');
    });
  
    // Оновити таблицю
    connection.query('ALTER TABLE beverage ADD COLUMN description VARCHAR(255) NOT NULL', (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Поле "description" додано');
    });
  
    // Видалити таблицю
    connection.query('DROP TABLE beverage', (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Таблиця видалена');
    });
  });