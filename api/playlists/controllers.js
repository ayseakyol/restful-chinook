const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM playlists`;

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

    const sql = `SELECT * FROM playlists WHERE  PlaylistId = '${id}'`;

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

    const sql = `INSERT INTO playlists (
                       Name
                   )
                   VALUES("${Name}")`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = Number(req.params.id);
    const Name = req.body.Name;

    const sql = `UPDATE playlists
                 SET Name = '${Name}'
                 WHERE PlaylistId = '${id}' `;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  delete: (req, res) => {
    const id = Number(req.params.id);

    const sql = `DELETE FROM playlists
    WHERE PlaylistId = '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
};

module.exports = controllers;
