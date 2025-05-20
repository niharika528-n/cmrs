import pool from '../db/db.js';

export const getMaterials = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM materials');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const recommendMaterials = async (req, res) => {
  const { project_type, budget, location } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM materials WHERE suitable_for = $1 AND cost <= $2',
      [project_type, budget]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
