import pool from '../db/db.js';

export const getMaterials = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM materials');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const recommendMaterials = async (req, res) => {
  const { project_type, budget } = req.body;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM materials WHERE suitable_for = ? AND cost <= ?',
      [project_type, budget]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
