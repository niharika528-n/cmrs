import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';

const ComparisonChart = ({ materials }) => {
  const chartData = [
    { subject: 'Strength', A: 120, B: 110, fullMark: 150 },
    { subject: 'Durability', A: 98, B: 130, fullMark: 150 },
    { subject: 'Cost Efficiency', A: 86, B: 130, fullMark: 150 },
    { subject: 'Sustainability', A: 99, B: 100, fullMark: 150 },
    { subject: 'Availability', A: 85, B: 90, fullMark: 150 },
    { subject: 'Installation Ease', A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">Material Comparison</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name={materials[0]?.name || 'Material A'}
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name={materials[1]?.name || 'Material B'}
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ComparisonChart;
