import React, { useState } from 'react';

export default function MaterialRecommendation() {
  const [projectType, setProjectType] = useState('residential');
  const [budget, setBudget] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_type: projectType, budget: parseInt(budget) })
    });

    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Get Material Recommendations</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full border px-3 py-2"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Budget (INR)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border px-3 py-2"
            placeholder="Enter your budget"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Recommendations
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Recommended Materials:</h2>
          <ul className="list-disc pl-6">
            {results.map((item) => (
              <li key={item.id}>
                {item.name} — ₹{item.cost}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
