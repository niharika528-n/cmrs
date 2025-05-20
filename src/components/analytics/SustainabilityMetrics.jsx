import React from 'react';
import { motion } from 'framer-motion';

const SustainabilityMetrics = ({ metrics }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">Sustainability Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div 
            key={metric.id}
            className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-blue-50"
          >
            <h4 className="text-sm font-medium text-gray-600">{metric.name}</h4>
            <div className="mt-2 flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                {metric.value}
              </span>
              <span className="ml-2 text-sm text-gray-500">{metric.unit}</span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${metric.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SustainabilityMetrics;
