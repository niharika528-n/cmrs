import React from 'react';
import { Line } from 'recharts';
import { motion } from 'framer-motion';

const CostAnalysis = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">Cost Analysis</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="currentCost" 
              stroke="#8884d8" 
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="projectedCost" 
              stroke="#82ca9d" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CostAnalysis;
