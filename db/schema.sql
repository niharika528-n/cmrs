CREATE TABLE IF NOT EXISTS materials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  type VARCHAR(50),
  cost INTEGER,
  suitable_for VARCHAR(100),
  region VARCHAR(100)
);

INSERT INTO materials (name, type, cost, suitable_for, region) VALUES
('Concrete', 'Building', 5000, 'residential', 'urban'),
('Steel', 'Reinforcement', 8000, 'commercial', 'urban'),
('Wood', 'Finish', 3000, 'residential', 'rural');
