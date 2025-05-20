import React from 'react'
import { motion } from 'framer-motion'

export default function Comparison() {
  const materials = [
    {
      id: 1,
      name: 'High-Strength Concrete',
      strength: 95,
      cost: 150,
      sustainability: 75
    },
    {
      id: 2,
      name: 'Reinforced Steel',
      strength: 90,
      cost: 200,
      sustainability: 60
    },
    {
      id: 3,
      name: 'Composite Material',
      strength: 85,
      cost: 180,
      sustainability: 85
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Material Comparison</h1>
        <p className="mt-2 text-gray-600">
          Compare different materials based on various parameters.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Material
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Strength
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost ($/unit)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sustainability
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {materials.map((material) => (
                <motion.tr
                  key={material.id}
                  whileHover={{ scale: 1.01 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {material.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${material.strength}%` }}
                        ></div>
                      </div>
                      <span className="ml-2">{material.strength}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${material.cost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: `${material.sustainability}%` }}
                        ></div>
                      </div>
                      <span className="ml-2">{material.sustainability}%</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}
