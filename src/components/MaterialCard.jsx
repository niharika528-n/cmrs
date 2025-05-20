import React from 'react';
import { motion } from 'framer-motion';

const MaterialCard = ({ material }) => {
  const {
    name,
    type,
    properties,
    cost,
    sustainability,
    strength,
    supplier
  } = material;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
          {type}
        </span>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Strength Rating</p>
            <div className="flex items-center mt-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${strength}%` }}
                />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">
                {strength}%
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Sustainability Score</p>
            <div className="flex items-center mt-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${sustainability}%` }}
                />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">
                {sustainability}%
              </span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Properties</h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(properties).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="text-gray-500">{key}: </span>
                <span className="font-medium text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Cost per unit</p>
              <p className="text-lg font-bold text-gray-900">${cost}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Supplier</p>
              <p className="text-sm font-medium text-gray-900">{supplier}</p>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MaterialCard;
