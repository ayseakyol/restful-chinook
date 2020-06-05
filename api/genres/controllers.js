const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM genres`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  getOne: (req, res) => {
    const id = Number(req.params.id);

    const sql = `SELECT * FROM genres WHERE  GenreId = '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  create: (req, res) => {
    // read row data from body
    const Name = req.body.Name;

    const sql = `INSERT INTO Genres (
                       Name
                   )
                   VALUES("${Name}")`;

    db.run(sql, (err, msg) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("The genre is successfully added.");
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = Number(req.params.id);
    const Name = req.body.Name;

    const sql = `UPDATE Genres
                 SET Name = '${Name}'
                 WHERE GenreId = '${id}' `;

    db.run(sql, (err, msg) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("The genre is successfully changed.");
    });
  },
  delete: (req, res) => {
    const id = Number(req.params.id);

    const sql = `DELETE FROM genres
    WHERE GenreId = '${id}'`;

    db.run(sql, (err, msg) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("The genre is successfully deleted.");
    });
  },
};

module.exports = controllers;
