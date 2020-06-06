const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM media_types`;

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

    const sql = `SELECT * FROM media_types WHERE  MediaTypeId = '${id}'`;

    db.get(sql, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(row);
    });
  },
  create: (req, res) => {
    // read row data from body
    const Name = req.body.Name;

    const sql = `INSERT INTO media_types (
                       Name
                   )
                   VALUES("${Name}")`;

    db.run(sql, (err, msg) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("The media-type is successfully added.");
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = Number(req.params.id);
    const Name = req.body.Name;

    const sql = `UPDATE media_types
                 SET Name = '${Name}'
                 WHERE MediaTypeId = '${id}' `;

    db.run(sql, (err, msg) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("The media-type is successfully changed.");
    });
  },
  delete: (req, res) => {
    const id = Number(req.params.id);

    const sql = `DELETE FROM media_types
    WHERE MediaTypeId = '${id}'`;

    db.run(sql, (err, msg) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("The media-type is successfully deleted.");
    });
  },
};

module.exports = controllers;
